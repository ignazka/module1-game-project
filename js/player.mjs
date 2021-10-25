import Game from "./game.mjs";

class Player {
  constructor(canvas, lives, spotlight) {
    this.radius = 8;
    this.lives = lives;
    this.canvas = canvas;
    this.spotlight = spotlight;
    this.game = new Game(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 2;
    this.speed = 5;
    this.directionY = 0;
    this.directionX = 0;
  }
  update() {
    this.y = this.y + this.directionY * this.speed;
    this.x = this.x + this.directionX * this.speed;
  }

  draw() {
    // let img = new Image();
    // img.src = "https://github.com/ignazka/spotlight/images/player-phase1.png"
    this.ctx.beginPath();
    // this.ctx.drawImage(img, this.x, this.y, 20, 20)

    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = "red";
    this.ctx.fill();
  }

  accelerate() {

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

    return checkTop || checkBottom || checkLeft || checkRight;
  }

  loseLive() {
    this.lives--;
  }


  drawLives() {
    const liveBoard = document.querySelector('.lives');
    if (this.lives === 3) {
      liveBoard.innerHTML = `

    
<<<<<<< HEAD
      <img src='https://ignazka.github.io/spotlight/images/heart.png'>
      <img src='https://ignazka.github.io/spotlight/images/heart.png'>
      <img src='https://ignazka.github.io/spotlight/images/heart.png'>
=======
      <img src='./images/heart.png'>
   <img src='./images/heart.png'>
      <img src='./images/heart.png'>
>>>>>>> c0e8ec807f043357857524c90e0f78c4e728991a
      `;
    }
    if (this.lives === 2) {
      liveBoard.innerHTML = `
<<<<<<< HEAD
      <img src='https://ignazka.github.io/spotlight/images/heart.png'>
      <img src='https://ignazka.github.io/spotlight/images/heart.png'>
=======
         <img src='./images/heart.png'>
         <img src='./images/heart.png'>
>>>>>>> c0e8ec807f043357857524c90e0f78c4e728991a
      `;
    }
    if (this.lives === 1) {
      liveBoard.innerHTML = `
<<<<<<< HEAD
      <img src='https://ignazka.github.io/spotlight/images/heart.png'>
=======
         <img src='./images/heart.png'>
>>>>>>> c0e8ec807f043357857524c90e0f78c4e728991a
      `;
    }

  }
}
export default Player;
