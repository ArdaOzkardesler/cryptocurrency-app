import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import PaginatedTable from "../List/PaginatedTable";
import Search from "../List/Search";

function List() {
  const [input, setInput] = useState("");

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Container maxWidth="xl">
            <Search setInput={setInput} />
            <PaginatedTable input={input} />
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default React.memo(List);
