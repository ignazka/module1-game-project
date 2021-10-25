class Spotlight {
  constructor(canvas) {
    this.speed = 2;
    this.radius = 200;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 2;
    this.directionY = 1;
    this.directionX = 1;

  }


  draw() {
    // if (Math.random() > 0.2) {
    this.x =
      this.x + (Math.random() * this.speed) * this.directionX;
    // }
    this.y =
      this.y + (Math.random() * this.speed) * this.directionY;


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
      this.radius = 180;
      this.speed = 3;
    }
    if (score > 1000 && score < 2000) {
      this.radius = 170;
      this.speed = 4;
    }
    if (score > 2000 && score < 3000) {
      this.radius = 160;
      this.speed = 5;
    }

    if (score > 3000 && score < 5000) {
      this.radius = 150;

    }

    if (score > 5000 && score < 10000) {
      this.radius = 140;
      // this.speed = 12;
    }

    if (score > 10000 && score < 12000) {
      this.radius = 100;
      // this.speed = 15;
    }

    if (score > 12000) {
      this.radius = 80;
    }
  }
}
export default Spotlight;
