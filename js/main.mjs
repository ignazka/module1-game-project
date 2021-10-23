"use-strict"; // WHY???? need to study

import Game from "./game.mjs";

function buildDom(html) {
  const main = document.querySelector("main");
  main.innerHTML = html;
}

function buildSplashScreen() {
  buildDom(`
        <section class="splash-screen">
        <h1>Spotlight! the game</h1>
        
        <button id="start-btn">start</button>
      
        </section>
        `);
  const btnStart = document.querySelector("#start-btn");
  btnStart.addEventListener("click", buildGameScreen);
}

function buildGameScreen() {
  buildDom(`
        <section class="game-screen">
        <p>Score:</p>
        <div class="score"></div>
        <canvas></canvas>
        </section>
    `);

  const canvasElement = document.querySelector("canvas");
  const game = new Game(canvasElement);

  canvasElement.width = window.innerWidth;
  canvasElement.height = window.innerHeight;

  game.gameOverCallback(buildGameOver);

  game.startLoop();

  const setPlayerDirection = (event) => {
    if (event.code === "ArrowUp") {
      game.player.setDirectionY(-1);
    } else if (event.code === "ArrowDown") {
      game.player.setDirectionY(1);
    }
    if (event.code === "ArrowLeft") {
      game.player.setDirectionX(-1);
    } else if (event.code === "ArrowRight") {
      game.player.setDirectionX(1);
    }
  };

  const resetPlayerDirection = () => {
    game.player.setDirectionX(0);
    game.player.setDirectionY(0);
  };
  document.addEventListener("keydown", setPlayerDirection);

  // stop player movement after key release
  document.addEventListener("keyup", resetPlayerDirection);
}

function buildGameOver() {
  buildDom(`
        <section class="game-over">
          <h1>Game Over</h1>
          <button id="btn-restart">Restart</button>
          <p>Final Score:</p>
          <div class="score"></div>
        
        </section>
      `);
  const btnRestart = document.querySelector("#btn-restart");
  btnRestart.addEventListener("click", buildGameScreen);
}

const main = () => {
  buildSplashScreen();
};
window.addEventListener("load", main);
