class Player {
  constructor(canvas, lives) {
    this.size = 20;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 2;
    this.speed = 2;
    this.directionY = 0;
    this.directionX = 0;

    this.lives = lives;
  }
  update() {
    this.y = this.y + this.directionY * this.speed;
    this.x = this.x + this.directionX * this.speed;
  }

  draw() {
    this.ctx.fillStyle = "blue";
    this.ctx.fillRect(this.x, this.y, 25, 20);
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

export default Player;
