export default function fetchBitcoin() {
  async function bitcoinApi() {
    try {
      const btcJson = await fetch('https://blockchain.info/ticker');
      const bitcoin = await btcJson.json();
      const showValue = document.querySelector('.btcApi');

      showValue.innerHTML = (1000 / bitcoin.BRL.sell).toFixed(4);
    } catch (error) {
      console.log(error);
    }
  }
  bitcoinApi();
}



