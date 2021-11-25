import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CoinsContext = createContext();

const CoinsProvider = ({ children }) => {
  const [coins, setCoins] = useState([]);

  const fetchCoins = async (requestURL) => {
    await axios
      .get(requestURL)
      .then((response) => {
        setCoins(response.data);
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    const requestURL =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=24h%2C7d";

    fetchCoins(requestURL);
  }, []);

  const values = { coins, setCoins };
  return (
    <CoinsContext.Provider value={values}>{children}</CoinsContext.Provider>
  );
};

const useCoins = () => useContext(CoinsContext);

export { CoinsProvider, useCoins };
