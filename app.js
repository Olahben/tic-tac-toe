/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
/* eslint-disable arrow-body-style */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */

let setCellIndex = 0;

const gameBoard = (() => {
  const gameBoardArr = ['', '', '', '', '', '', '', '', ''];

  const _renderGameBoard = (() => {
    const gameBoardGrid = document.querySelector('#grid-container');
    for (let i = 0; i < 9; i++) {
      // console.log(gameBoardGrid);
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.textContent = gameBoardArr[i];
      cell.index = setCellIndex;
      setCellIndex++;
      gameBoardGrid.appendChild(cell);
    }
  })();
  return { gameBoardArr };
})();


const makePlayer = (name, selector) => {
  return { name, selector };
};

const displayController = (() => {
  const cells = document.querySelectorAll('.cell')
  cells.forEach((cell) => {
    cell.addEventListener('click', () => {
      gameBoard.gameBoardArr[cell.index] = 'X';
    })
  })
})();
