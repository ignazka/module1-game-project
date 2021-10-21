import Spotlight from "./spotlight.mjs";


class Player {
  constructor(canvas, lives, spotlight) {
    this.radius = 10;
    this.canvas = canvas;
    this.spotlight = spotlight;
    this.spotlight = new Spotlight(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 2;
    this.speed = 5;
    this.directionY = 0;
    this.directionX = 0;

    this.lives = lives;
  }
  update() {
    this.y = this.y + this.directionY * this.speed;
    this.x = this.x + this.directionX * this.speed;
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = 'red';
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

  checkCollisions(spotlight) {
    const checkTop = this.y - this.radius < spotlight.y - spotlight.radius;
    const checkBottom = this.y + this.radius > spotlight.y + spotlight.radius;
    const checkLeft = this.x - this.radius < spotlight.x - spotlight.radius;
    const checkRight = this.x + this.radius > spotlight.x + spotlight.radius;

    return checkTop || checkBottom || checkLeft || checkRight
  }
}

export default Player;
