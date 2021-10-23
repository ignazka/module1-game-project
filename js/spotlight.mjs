class Spotlight {
  constructor(canvas) {
    this.speed = 5;
    this.radius = 400;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 2;
    this.directionY = 1;
    this.directionX = 1;

  }


  draw() {
    if (Math.random() > 0.9) {
      this.x =
        this.x + Math.floor(Math.random() * this.speed) * this.directionX;
    } else {
      this.y =
        this.y + Math.floor(Math.random() * this.speed) * this.directionY;
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
      this.radius = 300;
      // this.speed = 5;
    }
    if (score > 1000 && score < 2000) {
      this.radius = 200;
      // this.speed = 7;
    }
    if (score > 2000 && score < 3000) {
      this.radius = 200;
      // this.speed = 10;
    }

    if (score > 3000 && score < 5000) {
      this.radius = 200;
      this.speed = 7;
    }

    if (score > 5000 && score < 10000) {
      this.radius = 150;
      // this.speed = 12;
    }

    if (score > 10000) {
      this.radius = 100;
      this.speed = 15;
    }
  }
}
export default Spotlight;
