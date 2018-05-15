import './scss/index.scss'
const symbols = ['X', 'O'];

const randomSymbol = () => {
  return symbols[(Math.floor(Math.random() * (100)) % 2)];
}
const getOppositeSymbol = (symbol) => {
  return symbol === 'X' ? 'O' : 'X';
}
const squares = [...document.getElementsByClassName('square')];
const symbol = randomSymbol();

squares.forEach(square => {
  square.addEventListener('click', event => {
    const data = event.target.dataset;

    console.log(data);
    console.log(symbol);
  });
});
