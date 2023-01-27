controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cursorRow > 0) {
        cursorRow += -1
    }
    drawCursor(cursorRow, cursorCol, newXOsprite)
})
function drawCursor (row: number, col: number, XOsprite: Sprite) {
    XOsprite.left = col * 34 + 38
    XOsprite.top = row * 34 + 18
}
function resetGame () {
    game.splash("Press A for new game")
    game.reset()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    newXOsprite.setFlag(SpriteFlag.Invisible, false)
    changePlayer()
    XOsprites.push(newXOsprite)
    newXOsprite = textsprite.create(XorOturn)
    newXOsprite.setMaxFontHeight(24)
    newXOsprite.setOutline(1, 13)
    drawCursor(cursorRow, cursorCol, newXOsprite)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cursorCol > 0) {
        cursorCol += -1
    }
    drawCursor(cursorRow, cursorCol, newXOsprite)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cursorCol < 2) {
        cursorCol += 1
    }
    drawCursor(cursorRow, cursorCol, newXOsprite)
})
function drawGrid () {
    tiles.setCurrentTilemap(tilemap`level1`)
}
function cursorBlink () {
    if (cursorOnOrOff == 1) {
        newXOsprite.setFlag(SpriteFlag.Invisible, true)
        cursorOnOrOff = 0
    } else {
        newXOsprite.setFlag(SpriteFlag.Invisible, false)
        cursorOnOrOff = 1
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cursorRow < 2) {
        cursorRow += 1
    }
    drawCursor(cursorRow, cursorCol, newXOsprite)
})
function changePlayer () {
    if (XorOturn == "X") {
        XorOturn = "O"
    } else {
        XorOturn = "X"
    }
}
let newXOsprite: TextSprite = null
let cursorOnOrOff = 0
let cursorCol = 0
let cursorRow = 0
let XorOturn = ""
let XOsprites: TextSprite[] = []
XOsprites = [textsprite.create("")]
XOsprites.pop()
drawGrid()
XorOturn = "X"
cursorRow = 0
cursorCol = 0
cursorOnOrOff = 1
newXOsprite = textsprite.create(XorOturn)
newXOsprite.setMaxFontHeight(24)
newXOsprite.setOutline(1, 13)
drawCursor(cursorRow, cursorCol, newXOsprite)
game.onUpdateInterval(200, function () {
    cursorBlink()
})
