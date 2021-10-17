class Spotlight {
  constructor(canvas) {
    this.radius = 50;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 2;
    this.speed = 2;
    this.directionY = 0;
    this.directionX = 0;
  }

  //   update(speed) {
  //     this.speed = speed;
  //     Math.floor(Math.random()) * 2 === this.directionX;
  //   }

  draw() {
    let dx = 0;
    let dy = 0;
    let delta = 40; // range (from 0) of possible dx or dy change
    let max = 250; // maximum dx or dy values
    let d2x = Math.random() * delta - delta / 2; //change dx and dy by random value
    let d2y = Math.random() * delta - delta / 2;

    if (Math.abs(d2x + dx) > max)
      // start slowing down if going too fast
      d2x *= -10;
    if (Math.abs(d2y + dy) > max) d2y *= -1;

    dx += d2x;
    dy += d2y;

    if (this.x + dx < 0 || this.x + dx > this.canvas.width)
      // bounce off walls
      dx *= -1;
    if (this.y + dy < 0 || this.y + dy > this.canvas.height) dy *= -1;

    this.x += dx;
    this.y += dy;

    this.ctx.beginPath(); //drawing circle
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    if (Math.random() > 0.97) {
      this.ctx.fillStyle = "#FFE433"; //color
      this.ctx.globalAlpha = 0.8;
    } else {
      this.ctx.fillStyle = "#FFE433"; //color
      this.ctx.globalAlpha = 0.2;
    }

    this.ctx.fill();
  }

  setDirectionY(direction) {
    this.directionY = direction;
    this.directionX = 0;
  }
  setDirectionX(direction) {
    this.directionX = direction;
    this.directionY = 0;
  }
}

export default Spotlight;
