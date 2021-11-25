import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ExchangeContext = createContext();

const ExchangeProvider = ({ children }) => {
  const [exchanges, setExchanges] = useState([]);

  const fetchExchanges = async (requestURL) => {
    await axios
      .get(requestURL)
      .then((response) => setExchanges(response.data))
      .catch((err) => alert(err));
  };

  useEffect(() => {
    const requestURL = "https://api.coingecko.com/api/v3/exchanges";
    fetchExchanges(requestURL);
  }, []);

  const values = { exchanges };

  return (
    <ExchangeContext.Provider value={values}>
      {children}
    </ExchangeContext.Provider>
  );
};

const useExchanges = () => useContext(ExchangeContext);

export { ExchangeProvider, useExchanges };
