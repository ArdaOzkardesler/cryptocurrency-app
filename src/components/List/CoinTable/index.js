import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import StarBorderIcon from "@mui/icons-material/StarBorder";
// import StarIcon from "@mui/icons-material/Star";
import * as numbro from "numbro";
import { Link } from "react-router-dom";
import { Sparklines, SparklinesLine } from "react-sparklines";

import { useCoins } from "../../../Context/CoinsContext";
import * as styles from "../CoinTable/styles.module.css";

function CoinTable({ input }) {
  const { coins } = useCoins();
  // const [favorite, setFavorite] = React.useState(false);

  // const coinsFav = coins.map((coin) => ({ ...coin, favorite: false }));

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(input.toLowerCase())
  );
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Rank</b>
            </TableCell>
            <TableCell align="left">
              <b>Name</b>
            </TableCell>
            <TableCell align="left">
              <b>Price</b>
            </TableCell>
            <TableCell align="left">
              <b>24h%</b>
            </TableCell>
            <TableCell align="left">
              <b>7d%</b>
            </TableCell>
            <TableCell align="left">
              <b>Market Cap</b>
            </TableCell>
            <TableCell align="left">
              <b>Circulating Supply</b>
            </TableCell>
            <TableCell align="left">
              <b>Max Supply</b>
            </TableCell>
            <TableCell align="left">
              <b>Graph (7d)</b>
            </TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredCoins.map((coin) => (
            <TableRow
              hover={true}
              key={coin.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <span>{coin.market_cap_rank}</span>
              </TableCell>
              <TableCell align="left">
                <span className={styles.coinName}>
                  <img
                    className={styles.coinImg}
                    src={coin.image}
                    alt=""
                    width="32"
                    height="32"
                  />
                  <Link className={styles.coinLink} to={`/coins/${coin.id}`}>
                    {coin.name}
                  </Link>
                  <span className={styles.nameSymbol}>{coin.symbol}</span>
                </span>
              </TableCell>
              <TableCell align="left">
                <span>
                  {numbro(coin.current_price).formatCurrency({
                    thousandSeparated: true,
                  })}
                </span>
              </TableCell>
              <TableCell align="left">
                <span
                  className={
                    coin.price_change_percentage_24h_in_currency > 0
                      ? styles.increase
                      : styles.decrease
                  }
                >
                  {numbro(coin.price_change_percentage_24h_in_currency).format({
                    mantissa: 2,
                  })}
                  %
                </span>
              </TableCell>
              <TableCell align="left">
                <span
                  className={
                    coin.price_change_percentage_7d_in_currency > 0
                      ? styles.increase
                      : styles.decrease
                  }
                >
                  {numbro(coin.price_change_percentage_7d_in_currency).format({
                    mantissa: 2,
                  })}
                  %
                </span>
              </TableCell>
              <TableCell align="left">
                <span>
                  {numbro(coin.market_cap).formatCurrency({
                    thousandSeparated: true,
                  })}
                </span>
              </TableCell>
              <TableCell align="left">
                <span>
                  {numbro(coin.circulating_supply).format({
                    thousandSeparated: true,
                    mantissa: 0,
                  })}
                </span>
                <span className={styles.supplySymbol}>{coin.symbol}</span>
              </TableCell>
              <TableCell align="left">
                <span>
                  {coin.max_supply !== null
                    ? numbro(coin.max_supply).format({
                        thousandSeparated: true,
                      })
                    : "--"}
                </span>
                <span className={styles.supplySymbol}>{coin.symbol}</span>
              </TableCell>
              {/* <SparkGraph
                sevenDayPrice={coin.sparkline_in_7d.price}
                sevenDayPercentage={coin.price_change_percentage_7d_in_currency}
              /> */}
              <TableCell align="left">
                <Sparklines data={coin.sparkline_in_7d.price}>
                  <SparklinesLine
                    color={
                      coin.price_change_percentage_7d_in_currency > 0
                        ? "green"
                        : "red"
                    }
                  />
                </Sparklines>
              </TableCell>
              {/* <TableCell
                align="left"
                onClick={() => {
                  setFavorite(!favorite);
                }}
              >
                {favorite ? (
                  <StarIcon color="warning" />
                ) : (
                  <StarBorderIcon color="warning" />
                )}
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default React.memo(CoinTable);
