function MapOfGame() {
    this.stick = new Stick()
}

MapOfGame.prototype.update = function () {
    this.stick.update()
}

MapOfGame.prototype.draw = function () {
    Canvas.drawImage(sprites.background, {x: 0, y: 0})
    this.stick.draw()
}

