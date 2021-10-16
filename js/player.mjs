class Player {
    constructor(canvas, lives) {
        this.size = 40;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.x = 10 + this.size / 2;
        this.y = this.canvas.height / 2;
        this.speed = 5;
        this.direction = 0;
        this.lives = lives;
    }
    update() {
        this.y = this.y + this.direction * this.speed;
    }

    draw() {
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(
            this.x - this.size / 2,
            this.y - this.size / 2,
            this.size,
            this.size
        );
    }

}


export default Player;

