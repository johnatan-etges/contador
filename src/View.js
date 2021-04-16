import { Input } from './Input.js' 
const View = {

    render({ minutes, seconds }) {
        document.body.innerHTML = `
            <p>Fim da tarefa em:</p>
            <span>${minutes}:${seconds}</span>
            <a href="./index.html">Interromper contador</a>            
        `;
    }


}

export { View }