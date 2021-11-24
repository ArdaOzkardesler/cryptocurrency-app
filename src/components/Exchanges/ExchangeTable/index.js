import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import * as numbro from "numbro";

import { useExchanges } from "../../../Context/ExchangeContext";
import * as styles from "../ExchangeTable/styles.module.css";

function ExchangeTable({ input }) {
  const { exchanges } = useExchanges();

  const filteredExchanges = exchanges.filter((exchange) =>
    exchange.name.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <TableContainer component={Paper}>
      <Table
        className={styles.font}
        sx={{ minWidth: 650 }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Rank</b>
            </TableCell>
            <TableCell align="left">
              <b>Name</b>
            </TableCell>
            <TableCell align="left">
              <b>Year</b>
            </TableCell>
            <TableCell align="left">
              <b>Trust Score</b>
            </TableCell>
            <TableCell align="left">
              <b>Volume(24h)</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredExchanges.map((exchange) => (
            <TableRow
              key={exchange.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <span>{exchange.trust_score_rank}</span>
              </TableCell>
              <TableCell align="left">
                <span className={styles.coinName}>
                  <img
                    className={styles.coinImg}
                    src={exchange.image}
                    alt=""
                    width="32"
                    height="32"
                  />

                  <a
                    className={styles.exchangeLink}
                    href={exchange.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {exchange.name}
                  </a>
                </span>
              </TableCell>
              <TableCell align="left">
                <span>
                  {exchange.year_established !== null
                    ? exchange.year_established
                    : "--"}
                </span>
              </TableCell>
              <TableCell align="left">
                <span>{exchange.trust_score}</span>
              </TableCell>
              <TableCell align="left">
                <span>
                  {numbro(exchange.trade_volume_24h_btc).format({
                    thousandSeparated: true,
                    mantissa: 2,
                  })}{" "}
                </span>
                <span>
                  <b>BTC</b>
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default React.memo(ExchangeTable);
