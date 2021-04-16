const { BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
    const win = new BrowserWindow({
      width: 350,
      height: 350,
      frame: false,
      resizable: false,
      fullscreenable: false,
      show: false,
      skipTaskbar: true,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
    })

    win.loadFile('index.html')

    win.on('blur', () => win.hide())
    
    return win
}

module.exports = createWindow()