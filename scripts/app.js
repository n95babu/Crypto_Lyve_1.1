/* eslint-disable no-undef */
/* eslint-disable no-console */
const ul = document.querySelector('.assets');
const ex = document.querySelector('.allExchanges');
const jcap = document.querySelector('.tCap');

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
    const h3 = createNode('h3');
    const image = createNode('img');
    image.src = assets.iconUrl;
    span.innerHTML = ` $${parseFloat(assets.price).toFixed(2)} `;
    h3.innerHTML = `${assets.name} `;
    append(li, image);
    append(li, span);
    append(li, h3);
    append(ul, li);
  });
};
getCoins();

const MKCap = async () => {
  const res = await axios.get(`${BASE_URL}`);
  const cap = res.data.data.stats;
  // console.log(cap);
  jcap.innerHTML = '';
  const h4 = createNode('h4');
  h4.innerHTML = `Market Cap: $${cap.totalMarketCap.toFixed(0)}`;
  append(jcap, h4);
};
MKCap();

const getExchanges = async () => {
  const res = await axios.get(`${EXCHNAGE_URL}`);
  const exchange = res.data.data.exchanges;
  // console.log(exchange);
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