/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
/* eslint-disable arrow-body-style */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
const gameBoard = (() => {
  const gameBoardArr = ['', '', '', '', '', '', '', '', ''];

  const _renderGameBoard = (() => {
    const gameBoardGrid = document.querySelector('#grid-container');
    for (let i = 0; i < 9; i++) {
      console.log(gameBoardGrid);
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.textContent = gameBoardArr[i];
      gameBoardGrid.appendChild(cell);
    }
  })();
  return { gameBoardArr };
})();

const makePlayer = (name, selector) => {
  return { name, selector };
};

const displayController = (() => {})();
