class Spotlight {
  constructor(canvas) {
    this.speed = 3;
    this.radius = 200;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 2;
    this.directionY = 1;
    this.directionX = 1;

  }

  resetPosition() {
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 2;
  }
  draw() {

    if (this.canvas.width < 500) {
      this.radius = 120;
    }
    if (this.speed > 5) {
      this.x =
        this.x + (Math.random() * this.speed * 1.4) * this.directionX;
      // }
      this.y =
        this.y + (Math.random() * this.speed * 1.4) * this.directionY;
    }
    else {
      // if (Math.random() > 0.2) {
      this.x =
        this.x + (Math.random() * this.speed) * this.directionX;
      // }
      this.y =
        this.y + (Math.random() * this.speed) * this.directionY;
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
      this.radius -= 20;
      this.speed = 3;
    }
    if (score > 1000 && score < 2000) {
      this.radius -= 30;
      this.speed = 4;
    }
    if (score > 2000 && score < 3000) {
      this.radius -= 40;
      this.speed = 5;
    }

    if (score > 3000 && score < 5000) {
      this.radius -= 50;
      this.speed = 5.5
    }

    if (score > 5000 && score < 10000) {
      this.radius -= 60;
      this.speed = 6;
    }

    if (score > 10000 && score < 12000) {
      this.radius -= 100;
      this.speed = 6.5
    }

    if (score > 12000) {
      this.radius -= 120;
      this.speed = 7;
    }
  }
}
export default Spotlight;
