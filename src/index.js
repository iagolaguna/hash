import './scss/index.scss'

const symbols = ['X', 'O'];
let me = true;
let plays = 0;

const randomSymbol = () => symbols[(Math.floor(Math.random() * (100)) % 2)];

const symbol = randomSymbol();
const getOppositeSymbol = symbol => symbol === 'X' ? 'O' : 'X';
const getSymbol = me => me ? symbol : getOppositeSymbol(symbol);
const getSymbolColor = (symbol = '') => symbol === 'X' ? 'aqua' : symbol === 'O' ? 'green' : 'white';

const $squares = document.querySelectorAll('.square');

console.log(`My symbol: ${symbol} and my color ${getSymbolColor(symbol)}`);

$squares.forEach(square => {
  square.addEventListener('click', event => {
    // TODO check se já tem valor;
    const data = event.target.dataset;
    if (data.symbol) {
      return;
    }
    const symbol = getSymbol(me);
    data.symbol = symbol
    console.log(data);
    event.target.style.backgroundColor = getSymbolColor(symbol);
    console.log(symbol);
    me = !me;
    ++plays;
    if (plays >= 9) {
      resetGame(document.querySelectorAll('.square'));
    }
  });
});

const resetGame = ($squares) => {
  plays = 0;
  me = true;
  $squares.forEach(square => {
    delete square.dataset.symbol;
    square.style.backgroundColor = 'white'
  });
}
