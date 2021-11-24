import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const CoinsContext = createContext();

const CoinsProvider = ({ children }) => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=24h%2C7d"
      )
      .then((response) => {
        setCoins(response.data);
      })
      .catch((err) => alert(err));
  }, []);

  const values = { coins, setCoins };
  return (
    <CoinsContext.Provider value={values}>{children}</CoinsContext.Provider>
  );
};

const useCoins = () => useContext(CoinsContext);

export { CoinsProvider, useCoins };
