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
      let setCellIndex = 0;
      const cell = document.createElement('div');
      cell.classList.add('cell');
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
  let marker = 'X';
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => {
    cell.addEventListener('click', () => {
      gameBoard.gameBoardArr[cell.index] = marker;
      // eslint-disable-next-line no-param-reassign
      cell.textContent = marker;
      if (marker === 'X') {
        marker = 'O';
      } else {
        marker = 'X';
      }
    });
  });
})();
