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

  //   update(speed) {
  //     this.speed = speed;
  //     Math.floor(Math.random()) * 2 === this.directionX;
  //   }

  draw() {
    if (Math.random() > 0.9) {
      this.x =
        this.x + Math.floor(Math.random() * this.speed) * this.directionX;
    } else {
      this.y =
        this.y + Math.floor(Math.random() * this.speed) * this.directionY;
    }

    this.ctx.beginPath(); //drawing circle
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    // if (Math.random() > 0.97) {
    //   this.ctx.fillStyle = "#FFE433"; //color
    //   this.ctx.globalAlpha = 0.8;
    // } else {
    this.ctx.fillStyle = "#FFE433"; //color
    this.ctx.globalAlpha = 0.2;
    // }

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
}
export default Spotlight;
