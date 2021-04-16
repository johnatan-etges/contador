const { screen } = require('electron')

function ControlWindow (win, tray) {
    function toggle() {
        if(win.isVisible()) {
            win.hide()
        } else {
            show()
        }
    }

    function show() {
        //pegar as posições da windows e da tray
        const { cursorX, cursorY} = getPosition()
        //atualizar o posicionamento da win
        win.setPosition(cursorX, cursorY, false)
        //mostrar a janela
        win.show()
        //chamar o foco
        win.focus()
    }

    function getPosition() {
        const winBounds = win.getBounds()
        const trayBounds = tray.getBounds()

        const { x, y } = screen.getCursorScreenPoint()
        //In the Project's Github issue #15003, user "codebytere" said that tray API
        //Was not implemented on Linux. The solution proposed by user "vigneshwaran-chandrasekaran"
        //Was use screen.getCursorScreenPoint() to get reference to screen point on click
        //Old
        //const x = Math.round(trayBounds.x + (trayBounds.width / 2) - (winBounds.width / 2))
        //const y = Math.round(trayBounds.y + trayBounds.height + 3)
        //New
        const cursorX = Math.round(x - (winBounds.width / 2))
        const cursorY = Math.round(y - winBounds.height)

        return {cursorX, cursorY}
    }

    return {
        toggle
    }
}

module.exports = ControlWindow