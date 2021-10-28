import Player from "./player.mjs";


class Spotlight {
  constructor(canvas) {
    this.speed = 3;

    this.canvas = canvas;
    this.radius = this.canvas.height / 4;
    this.ctx = this.canvas.getContext("2d");
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 2;
    this.directionY = 1;
    this.directionX = 1;


  }

  resetPosition(player) {
    this.x = player.x;
    this.y = player.y;
  }
  draw() {
    // if (Math.random() > 0.2) {
    this.x =
      this.x + (Math.random() * this.speed) * this.directionX;
    // }
    this.y =
      this.y + (Math.random() * this.speed) * this.directionY;
    if (this.canvas.width < 500) {
      this.radius = this.canvas.height / 6;
    }
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);

    this.ctx.fillStyle = "#FFE433";
    this.ctx.globalAlpha = 0.2;
    this.ctx.fill();
  }

  checkScreen() {
    if (this.y - this.radius <= 0) {
      this.directionY = 1;
    } else if (this.y + this.radius >= this.canvas.height) {
      this.directionY = -1;
    }

    if (this.x - this.radius <= 0) {
      this.directionX = 1;
    } else if (this.x + this.radius >= this.canvas.width) {
      this.directionX = -1;
    }
  }
  setDifficulty(score) {

    if (score > 500 && score < 1000) {

      this.speed = 3;
    }
    if (score > 1000 && score < 2000) {
      this.speed = 4;
    }
    if (score > 2000 && score < 2500) {
      this.speed = 5;
    }

    if (score > 2500 && score < 3000) {

      this.radius = this.canvas.height / 5;
    }

    if (score > 3000 && score < 3500) {
      this.radius = this.canvas.height / 6;
    }

    if (score > 3500 && score < 4000) {
      this.radius = this.canvas.height / 7;
    }

    if (score > 4000 && score < 4500) {
      this.radius = this.canvas.height / 8;
    }
    if (score > 4500 && score < 5000) {
      this.speed = 6;
    }
    if (score > 5000 && score < 5500) {
      this.speed = 7;
    }
    if (score > 5500 && score < 6000) {
      this.speed = 8;
    }
    if (score > 6000 && score < 7000) {
      this.radius = this.canvas.height / 9;
    }
    if (score > 7000) {
      this.radius = this.canvas.height / 10
    }
  }
}
export default Spotlight;
