import React, { useState } from "react";
import Container from "@mui/material/Container";

// import ExchangeTable from "../Exchanges/ExchangeTable";
import PaginatedExchanges from "./PaginatedExchanges";
import Search from "../Exchanges/Search";

function Exchanges() {
  const [input, setInput] = useState("");

  return (
    <div>
      <Container maxWidth="xl">
        <Search setInput={setInput} />
        <PaginatedExchanges input={input} />
      </Container>
    </div>
  );
}

export default React.memo(Exchanges);
