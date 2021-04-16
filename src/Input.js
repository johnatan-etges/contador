import { Timer } from './Timer.js'
import { Notifyer } from './Notifyer.js'
import { Emitter } from './Emitter.js'

const Input = {

    minutesToSeconds: minutes => minutes * 60,

    addCountdown: function() {
        let minutes = parseInt(document.getElementById('minutes').value)
        let seconds = parseInt(document.getElementById('seconds').value)
        let description = document.getElementById('description').value
        let title = document.getElementById('title').value
        let time = (Input.minutesToSeconds(minutes) + seconds)

        let notify = Notifyer.notify({
            title: title || 'Contador',
            body: description || 'Fim da tarefa personalizada'
        })

        Emitter.on('countdown-end', notify)
        Emitter.on('countdown-end', Input.render)
        Timer.init(time)
    },
    render() {                
        document.body.innerHTML = `
            <div class="div-row">
                <div class="qtd">
                <label>Min</label>
                <input type="number" min="0" max="24" id="minutes" value="0"/>
                </div
                <span>:</span>
                <div class="qtd">
                <label>Sec</label>
                <input type="number" min="0" max="59" id="seconds" value="0"/>
                </div>
            </div>
            <input type="text" id="title" placeholder="Título"/>
            <input type="text" id="description" placeholder="Descrição"/>
            <button id="btn">Iniciar</button>
        `;

        document.getElementById("btn").addEventListener('click', () => Input.addCountdown())
    }
}

export { Input }