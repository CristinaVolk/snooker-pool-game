function Game() {

}

Game.prototype.init = function () {
    this.mapOfGame = new MapOfGame()
}

Game.prototype.start = function () {
    PoolGame.init()
    PoolGame.mainLoop()
}

Game.prototype.mainLoop = function () {
    Canvas.clear()
    PoolGame.mapOfGame.update()
    PoolGame.mapOfGame.draw()
    Mouse.reset()

    requestAnimationFrame(PoolGame.mainLoop)
}

let PoolGame = new Game()
