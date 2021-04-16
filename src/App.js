import { Notifyer } from './Notifyer.js'
import { Input } from './Input.js'

const App = {
    async start() {
        try {
            await Notifyer.init()
            Input.render()
        } catch (err) {
            console.log(err)
        }
    }    
}

export { App }