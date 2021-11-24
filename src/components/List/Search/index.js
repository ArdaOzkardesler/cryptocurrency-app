import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

import * as styles from "../Search/styles.module.css";

function Search({ setInput }) {
  const [searchInput, setSearchInput] = useState("");

  // useEffect(() => {
  //   console.log("search componentinde", searchInput);
  // }, [searchInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    setInput(e.target.value);
  };
  return (
    <Box
      className={styles.box}
      sx={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
      }}
    >
      <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
      <form onSubmit={handleSubmit}>
        <TextField
          id="input-with-sx"
          label="Search"
          variant="standard"
          value={searchInput}
          onChange={handleChange}
          className={styles.textField}
        />
      </form>
    </Box>
  );
}

export default React.memo(Search);
