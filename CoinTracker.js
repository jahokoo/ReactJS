import { useState, useEffect } from "react";

function App() {
  const [exchange, setExchange] = useState();
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [index,setIndex] = useState(0);

  const onSelect = (e) =>{
    setIndex(e.target.value)
  }
  const onChange = (usd) => {
    setExchange(usd.target.value / coins[index].quotes.USD.price +` ${coins[index].symbol}`)
  }
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=50")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, [])
  return (
    <div>
      <h1>Coin Exchanger {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : 
      <div>
      <input onChange={onChange} type="number" placeholder="exchange to Coin"/>
      <span> : {exchange ? exchange : 0} </span>
      <br/>
        <select onChange={onSelect}>
          {coins.map((coin,index) =>
            <option key={index} value={index}>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
            </option>)}
        </select>
        </div>
      }

    </div>
  );
}

export default App;
