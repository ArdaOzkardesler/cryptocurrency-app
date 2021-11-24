import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ExchangeContext = createContext();

const ExchangeProvider = ({ children }) => {
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/exchanges")
      .then((response) => setExchanges(response.data))
      .catch((err) => alert(err));
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
