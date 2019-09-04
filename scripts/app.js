/* eslint-disable no-console */
const BASE_URL = 'https://api.coinranking.com/v1/public/coins';

const getCoins = async () => {
  try {
    const res = await axios.get(`${BASE_URL}`);
    const coin = res.data.data.coins;
    console.log(coin);
    return coin;
  } catch (e) {
    console.error(e);
  }
};

getCoins();