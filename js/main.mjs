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
        <p>choose difficulty<p>
        <button id="easy-mode">easy</button>
        <button id="hard-mode">hard</button>
        </section>
        `);
  const btnEasy = document.querySelector("#easy-mode");
  btnEasy.addEventListener("click", buildGameScreen);
}

function buildGameScreen() {
  buildDom(`
        <section class="game-screen">
        <canvas></canvas>
        </section>
    `);
  const canvasElement = document.querySelector("canvas");
  canvasElement.width = window.innerWidth;
  canvasElement.height = window.innerHeight;
  console.log(canvasElement);

  const game = new Game(canvasElement);
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

  }
  document.addEventListener("keydown", setPlayerDirection);

  // stop player movement after key release
  document.addEventListener('keyup', resetPlayerDirection);
}

function buildGameOver() {
  buildDom(`
        <section class="game-over">
          <h1>Game Over</h1>
          <button id="btn-restart">Restart</button>
          <button id="btn-main-menu">Main Menu</button>
        </section>
      `);
  const btnRestart = document.querySelector("#btn-restart");
  btnRestart.addEventListener("click", buildGameScreen);
  const btnMainMenu = document.querySelector("#btn-main-menu")
  btnMainMenu.addEventListener("click", buildSplashScreen);
}

const main = () => {
  buildSplashScreen();
};
window.addEventListener("load", main);
