import Player from "./player.mjs";
import Spotlight from "./spotlight.mjs";

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.player;
    this.spotlight;
    this.isGameOver = false;
  }
  startLoop() {
    this.player = new Player(this.canvas, 3);
    this.spotlight = new Spotlight(this.canvas);

    const loop = () => {
      this.checkAllCollisions();
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

    this.spotlight.draw();
  }
  checkAllCollisions() {
    this.spotlight.checkScreen();

  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  gameOverCallback(callback) {
    this.onGameOver = callback;
  }
}
export default Game;
