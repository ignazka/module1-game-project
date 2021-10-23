import Player from "./player.mjs";
import Spotlight from "./spotlight.mjs";

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.player;
    this.spotlight;
    this.isGameOver = false;
    this.score = 0;
  }
  startLoop() {
    this.spotlight = new Spotlight(this.canvas);
    this.player = new Player(this.canvas, 3, this.spotlight);

    const loop = () => {
      this.playerScore();
      this.spotlight.setDifficulty(this.score);
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
    if (this.player.checkCollisions(this.spotlight)) {
      this.player.x = this.spotlight.x;
      this.player.y = this.spotlight.y;
      this.player.loseLive();
      if (this.player.lives === 0) {
        this.isGameOver = true;
        this.onGameOver();
      }
    }
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  gameOverCallback(callback) {
    this.onGameOver = callback;
  }

  playerScore() {
    if (!this.isGameOver) {
      const intervalId = setInterval(() => {
        this.score += 0.001;
        const scoreElement = document.querySelector(".score");
        scoreElement.innerHTML = `${Math.floor(this.score)}`;
        if (this.isGameOver) {
          clearInterval(intervalId);
        }
      }, 1);
    }
  }
}
export default Game;
