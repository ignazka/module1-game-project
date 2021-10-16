import Player from "./player.mjs";

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.player;
        this.isGameOver = false;
    }
    startLoop() {
        this.player = new Player(this.canvas, 3);

        const loop = () => {
            //   if (Math.random() > 0.97) {
            //     const y = Math.random() * this.canvas.height;
            //     this.enemies.push(new Enemy(this.canvas, y));
            //   }

            //   this.checkAllCollisions();
            this.updateCanvas();
            this.clearCanvas();
            this.drawCanvas();

            if (!this.isGameOver) {
                window.requestAnimationFrame(loop);
            }
        };

        window.requestAnimationFrame(loop);
    }

    updateCanvas() {
        this.player.update();

    }
    drawCanvas() {
        this.player.draw();

    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    gameOverCallback(callback) {
        this.onGameOver = callback;
    }

}
export default Game;