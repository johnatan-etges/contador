const { Tray } = require('electron')
const { resolve } = require('path')

const iconPath = resolve(__dirname, '../', 'assets', 'trayicon.png')

function createTray() {
    const tray = new Tray(iconPath)
    tray.setToolTip('Cronômetro')

    return tray
}

module.exports = createTray();