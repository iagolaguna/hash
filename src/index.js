import './scss/index.scss'

const symbols = ['X', 'O'];
let me = true;
let plays = 0;
let matriz = [[null, null, null], [null, null, null], [null, null, null]];
const randomSymbol = () => symbols[(Math.floor(Math.random() * (50)) % 2)];

const symbol = randomSymbol();
const getOppositeSymbol = symbol => symbol === 'X' ? 'O' : 'X';
const getSymbol = me => me ? symbol : getOppositeSymbol(symbol);

const $squares = document.querySelectorAll('.square');

console.log(`My symbol: ${symbol}`);
console.log(matriz);
$squares.forEach(square => {
  square.addEventListener('click', event => {
    const data = event.target.dataset;
    console.log(data);
    if (data.symbol) {
      return;
    }
    const symbol = getSymbol(me);
    data.symbol = symbol
    console.log(data);
    console.log(symbol);
    matriz[data.x][data.y] = symbol;

    checkGame(matriz);
  });
});

const resetGame = ($squares) => {
  plays = 0;
  me = true;
  $squares.forEach(square => {
    delete square.dataset.symbol;
    square.style.backgroundColor = 'white';
    square.className = 'square';
  });
  matriz = [[null, null, null], [null, null, null], [null, null, null]];
}

const checkGame = (matriz) => {
  const $squares = [...document.querySelectorAll('.square')];
  let squaresWinner = null;
  if (matriz[0][0] === matriz[1][1] && matriz[1][1] === matriz[2][2] && matriz[0][0] !== null) {
    squaresWinner = $squares.filter(square => parseInt(square.dataset.x) - parseInt(square.dataset.y) === 0);
  }

  if (matriz[0][2] === matriz[1][1] && matriz[1][1] === matriz[2][0] && matriz[0][2] !== null) {
    squaresWinner = $squares.filter(square => parseInt(square.dataset.x) + parseInt(square.dataset.y) === 2);
  }

  for (let x = 0; x < 3; x++) {
    if (matriz[x][0] === matriz[x][1] && matriz[x][1] === matriz[x][2] && matriz[x][1] !== null) {
      squaresWinner = $squares.filter(square => parseInt(square.dataset.x) === x);
      break;
    }
  }
  for (let x = 0; x < 3; x++) {
    if (matriz[0][x] === matriz[1][x] && matriz[1][x] === matriz[2][x] && matriz[1][x] !== null) {
      squaresWinner = $squares.filter(square => parseInt(square.dataset.x) === x);
      break;
    }
  }

  if (squaresWinner) {
    squaresWinner.forEach(square => {
      square.className += ' win';
    })
    console.log(`${symbol.toLowerCase()} is winner`);
  }
  me = !me;
  ++plays;
  if (plays >= 9) {
    resetGame(document.querySelectorAll('.square'));
  }
}
