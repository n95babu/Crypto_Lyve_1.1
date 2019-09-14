/* eslint-disable no-undef */
/* eslint-disable no-console */
const ul = document.querySelector('.assets');
const ex = document.querySelector('.allExchanges');
const BASE_URL = 'https://api.coinranking.com/v1/public/coins';
const EXCHNAGE_URL = 'https://api.coinranking.com/v1/public/exchanges';

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

// span.setAttribute('class', span.getAttribute('class'));

const getCoins = async () => {
  const res = await axios.get(`${BASE_URL}`);
  const coin = res.data.data.coins;
  ul.innerHTML = '';
  coin.forEach((assets) => {
    const li = createNode('li');
    const span = createNode('span');
    const h1 = createNode('h1')
    const image = createNode('img');
    image.src = assets.iconUrl;
    span.innerHTML = ` $${parseFloat(assets.price).toFixed(2)} `;
    h1.innerHTML = `${assets.name} `;
    append(li, image);
    append(li, span);
    append(li, h1);
    append(ul, li);
  });
};
getCoins();

const getExchanges = async () => {
  const res = await axios.get(`${EXCHNAGE_URL}`);
  const exchange = res.data.data.exchanges;
  console.log(exchange);
  ex.innerHTML = '';
  exchange.forEach((exch) => {
    const li = createNode('li');
    const span = createNode('span');
    const image = createNode('img');
    image.src = exch.iconUrl;
    span.innerHTML = ` ${exch.name} Volume: ${exch.volume} `;
    append(li, span);
    append(ex, li);
    append(li, image);
  });
};
getExchanges();

// setInterval(() => {
//   const assets = document.querySelector('.coin');
//   getCoins();
// }, 1000);