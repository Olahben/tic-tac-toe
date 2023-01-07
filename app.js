/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
/* eslint-disable arrow-body-style */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */

const gameBoard = (() => {
  const gameBoardArr = ['', '', '', '', '', '', '', '', ''];
  let setCellIndex = 0;

  const _renderGameBoard = (() => {
    const gameBoardGrid = document.querySelector('#grid-container');
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.index = setCellIndex;
      setCellIndex++;
      gameBoardGrid.appendChild(cell);
    }
  })();
  return { gameBoardArr, setCellIndex };
})();

const makePlayer = (name, selector) => {
  return { name, selector };
};

const displayController = (() => {
  const modal = document.getElementById('myModal');
  const closeModalBtn = document.querySelector('.close');
  const modalText = document.querySelector('.result');
  let marker = 'X';
  const cells = document.querySelectorAll('.cell');
  const placeMarker = cells.forEach((cell) => {
    cell.addEventListener('click', () => {
      if (cell.textContent === 'X' || cell.textContent === 'O') {
        return true;
      }

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

  const resetGame = () => {
    gameBoard.gameBoardArr = ['', '', '', '', '', '', '', '', ''];
    gameBoard.setCellIndex = 0;
    marker = 'X';

    const removeMarkers = document.querySelectorAll('.cell').forEach((cell) => {
      cell.textContent = '';
    });
  };

  const makeResultModal = (result) => {
    modal.style.display = 'block';

    modalText.textContent = `${result}! Congrats to everyone!`;
  };

  const checkForWin = cells.forEach((cell) => {
    cell.addEventListener('click', () => {
      if (
        (gameBoard.gameBoardArr[0] === 'X' ||
          gameBoard.gameBoardArr[0] === 'O') &&
        (gameBoard.gameBoardArr[1] === 'X' ||
          gameBoard.gameBoardArr[1] === 'O') &&
        (gameBoard.gameBoardArr[2] === 'X' ||
          gameBoard.gameBoardArr[2] === 'O') &&
        (gameBoard.gameBoardArr[3] === 'X' ||
          gameBoard.gameBoardArr[3] === 'O') &&
        (gameBoard.gameBoardArr[4] === 'X' ||
          gameBoard.gameBoardArr[4] === 'O') &&
        (gameBoard.gameBoardArr[5] === 'X' ||
          gameBoard.gameBoardArr[5] === 'O') &&
        (gameBoard.gameBoardArr[6] === 'X' ||
          gameBoard.gameBoardArr[6] === 'O') &&
        (gameBoard.gameBoardArr[7] === 'X' ||
          gameBoard.gameBoardArr[7] === 'O') &&
        (gameBoard.gameBoardArr[8] === 'X' || gameBoard.gameBoardArr[8] === 'O')
      ) {
        makeResultModal('TIE');
      }
      if (
        gameBoard.gameBoardArr[0] === 'X' &&
        gameBoard.gameBoardArr[1] === 'X' &&
        gameBoard.gameBoardArr[2] === 'X'
      ) {
        makeResultModal('X');
      }
      if (
        gameBoard.gameBoardArr[0] === 'O' &&
        gameBoard.gameBoardArr[1] === 'O' &&
        gameBoard.gameBoardArr[2] === 'O'
      ) {
        makeResultModal('O');
      }
      if (
        gameBoard.gameBoardArr[3] === 'X' &&
        gameBoard.gameBoardArr[4] === 'X' &&
        gameBoard.gameBoardArr[5] === 'X'
      ) {
        makeResultModal('X');
      }
      if (
        gameBoard.gameBoardArr[3] === 'O' &&
        gameBoard.gameBoardArr[4] === 'O' &&
        gameBoard.gameBoardArr[5] === 'O'
      ) {
        makeResultModal('O');
      }
      if (
        gameBoard.gameBoardArr[6] === 'X' &&
        gameBoard.gameBoardArr[7] === 'X' &&
        gameBoard.gameBoardArr[8] === 'X'
      ) {
        makeResultModal('X');
      }
      if (
        gameBoard.gameBoardArr[6] === 'O' &&
        gameBoard.gameBoardArr[7] === 'O' &&
        gameBoard.gameBoardArr[8] === 'O'
      ) {
        makeResultModal('O');
      }
      if (
        gameBoard.gameBoardArr[1] === 'X' &&
        gameBoard.gameBoardArr[4] === 'X' &&
        gameBoard.gameBoardArr[7] === 'X'
      ) {
        makeResultModal('X');
      }
      if (
        gameBoard.gameBoardArr[1] === 'O' &&
        gameBoard.gameBoardArr[4] === 'O' &&
        gameBoard.gameBoardArr[7] === 'O'
      ) {
        makeResultModal('O');
      }
      if (
        gameBoard.gameBoardArr[0] === 'X' &&
        gameBoard.gameBoardArr[3] === 'X' &&
        gameBoard.gameBoardArr[6] === 'X'
      ) {
        makeResultModal('X');
      }
      if (
        gameBoard.gameBoardArr[0] === 'O' &&
        gameBoard.gameBoardArr[3] === 'O' &&
        gameBoard.gameBoardArr[6] === 'O'
      ) {
        makeResultModal('O');
      }
      if (
        gameBoard.gameBoardArr[2] === 'X' &&
        gameBoard.gameBoardArr[5] === 'X' &&
        gameBoard.gameBoardArr[8] === 'X'
      ) {
        makeResultModal('X');
      }
      if (
        gameBoard.gameBoardArr[2] === 'O' &&
        gameBoard.gameBoardArr[5] === 'O' &&
        gameBoard.gameBoardArr[8] === 'O'
      ) {
        makeResultModal('O');
      }
      if (
        gameBoard.gameBoardArr[0] === 'X' &&
        gameBoard.gameBoardArr[4] === 'X' &&
        gameBoard.gameBoardArr[8] === 'X'
      ) {
        makeResultModal('X');
      }
      if (
        gameBoard.gameBoardArr[0] === 'O' &&
        gameBoard.gameBoardArr[4] === 'O' &&
        gameBoard.gameBoardArr[8] === 'O'
      ) {
        makeResultModal('O');
      }
      if (
        gameBoard.gameBoardArr[2] === 'X' &&
        gameBoard.gameBoardArr[4] === 'X' &&
        gameBoard.gameBoardArr[6] === 'X'
      ) {
        makeResultModal('X');
      }
      if (
        gameBoard.gameBoardArr[2] === 'O' &&
        gameBoard.gameBoardArr[4] === 'O' &&
        gameBoard.gameBoardArr[6] === 'O'
      ) {
        makeResultModal('O');
      }
    });
  });

  const closeModal = closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';

    resetGame();
  });
})();
