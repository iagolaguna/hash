import './scss/index.scss'
const symbols = ['X', 'O'];
let me = true;

const randomSymbol = () => {
  return symbols[(Math.floor(Math.random() * (100)) % 2)];
}

const getOppositeSymbol = (symbol) => {
  return symbol === 'X' ? 'O' : 'X';
}

const getSymbolColor = (symbol = '') => {
  return symbol === 'X' ? 'aqua' : symbol === 'O' ? 'green' : 'white';
}

const $squares = document.querySelectorAll('.square');
const symbol = randomSymbol();
console.log(`My symbol: ${symbol} and my color ${getSymbolColor(symbol)}`);

$squares.forEach(square => {
  square.addEventListener('click', event => {
    // TODO check se já foi clicado
    const data = event.target.dataset;
    console.log(data);
    event.target.style.backgroundColor = getSymbolColor(me ? symbol : getOppositeSymbol(symbol));
    console.log(symbol);
    const turn = window.confirm('Turn');
    if (turn) {
      me = !me;
    } else {
      event.target.style.backgroundColor = getSymbolColor();
    }
  });
});
