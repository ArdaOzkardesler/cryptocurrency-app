import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import * as numbro from "numbro";
import { Line } from "react-chartjs-2";
import Skeleton from "@mui/material/Skeleton";
import { useThemes } from "../../Context/ThemeContext";

import { useCoins } from "../../Context/CoinsContext";
import * as styles from "../CoinDetails/styles.module.css";

function CoinDetails() {
  const { id } = useParams();
  const { coins } = useCoins();
  const { themes } = useThemes();
  const [coinDetails, setCoinDetails] = useState({});
  const [graphData, setGraphData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchCoinDetails = async (detailsURL) => {
    await axios
      .get(detailsURL)
      .then((response) => {
        setCoinDetails(response.data);
      })
      .catch((err) => alert(err))
      .finally(setIsLoading(false));
  };

  const fetchGraphData = async (graphsURL) => {
    await axios
      .get(graphsURL)
      .then((response) => {
        setGraphData(response.data);
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    const detailsURL = `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`;
    fetchCoinDetails(detailsURL);

    const graphsURL = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7&interval=hourly`;
    fetchGraphData(graphsURL);
  }, [id]);

  function createMarkup(data) {
    return { __html: data };
  }

  const filter = coins.filter((coin) => coin.id === id);

  return (
    <div>
      <Link className={styles.backLink} to="/coins">
        <ArrowBackIcon
          style={{ color: themes === "dark" ? "white" : "black" }}
          fontSize="large"
        />
        <span
          style={{ color: themes === "dark" ? "white" : "black" }}
          className={styles.backText}
        >
          Back to homepage
        </span>
      </Link>
      {filter.map((coin) => (
        <Container className={styles.container} key={coin.id} maxWidth="xl">
          <div className={styles.coinName}>
            <img src={coin.image} alt={coin.name} height="48" width="48" />
            <h2>
              {coin.name} (
              <span className={styles.coinSymbol}>{coin.symbol}</span>)
            </h2>
            <Chip size="medium" label={`Rank #${coin.market_cap_rank}`} />
          </div>

          <div className={styles.subInfo}>
            <span className={styles.priceText}>{coin.name} Price: </span>
            <span className={styles.coinPrice}>
              {numbro(coin.current_price).formatCurrency({
                thousandSeparated: true,
              })}
            </span>
            <Chip
              size="medium"
              label={`${numbro(
                coin.price_change_percentage_24h_in_currency
              ).format({
                mantissa: 2,
              })}%`}
              style={{
                color: "white",
                backgroundColor:
                  coin.price_change_percentage_24h_in_currency > 0
                    ? "#16c784"
                    : "#ea3943",
              }}
            />
          </div>
          <h2 style={{ textAlign: "left", marginBottom: 0 }}>
            What is {coin.name}?
          </h2>

          <div className={styles.descGraphContainer}>
            <div className={styles.description}>
              {isLoading ? (
                <div style={{ padding: 40 }}>
                  <Skeleton
                    component={Container}
                    animation="pulse"
                    height={10}
                    width="100%"
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton
                    component={Container}
                    animation="pulse"
                    height={10}
                    width="100%"
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton
                    component={Container}
                    animation="pulse"
                    height={10}
                    width="100%"
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton
                    component={Container}
                    animation="pulse"
                    height={10}
                    width="100%"
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton
                    component={Container}
                    animation="pulse"
                    height={10}
                    width="100%"
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton
                    component={Container}
                    animation="pulse"
                    height={10}
                    width="100%"
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton
                    component={Container}
                    animation="pulse"
                    height={10}
                    width="100%"
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton
                    component={Container}
                    animation="pulse"
                    height={10}
                    width="100%"
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton
                    component={Container}
                    animation="pulse"
                    height={10}
                    width="100%"
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton
                    component={Container}
                    animation="pulse"
                    height={10}
                    width="100%"
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton
                    component={Container}
                    animation="pulse"
                    height={10}
                    width="100%"
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton
                    component={Container}
                    animation="pulse"
                    height={10}
                    width="100%"
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton
                    component={Container}
                    animation="pulse"
                    height={10}
                    width="100%"
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton
                    component={Container}
                    animation="pulse"
                    height={10}
                    width="100%"
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton
                    component={Container}
                    animation="pulse"
                    height={10}
                    width="100%"
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton
                    variant="text"
                    component={Container}
                    animation="pulse"
                    height={10}
                    width="100%"
                    style={{ marginBottom: 6 }}
                  />
                </div>
              ) : (
                <p
                  dangerouslySetInnerHTML={createMarkup(
                    coinDetails.description?.en
                  )}
                ></p>
              )}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "25px",
                }}
              >
                <span>
                  <h3 style={{ marginBottom: 0 }}>Website:</h3>
                  <a
                    href={
                      coinDetails.links?.homepage[0] !== ""
                        ? coinDetails.links?.homepage[0]
                        : "#"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {coinDetails.links?.homepage[0] !== ""
                      ? coinDetails.links?.homepage[0]
                      : "--"}
                  </a>
                </span>

                <span>
                  <h3 style={{ marginBottom: 0 }}>Forum:</h3>
                  <a
                    href={
                      coinDetails.links?.official_forum_url[0] !== ""
                        ? coinDetails.links?.official_forum_url[0]
                        : "#"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {coinDetails.links?.official_forum_url[0] !== ""
                      ? coinDetails.links?.official_forum_url[0]
                      : "--"}
                  </a>
                </span>
              </div>
            </div>

            <div className={styles.graph}>
              <Line
                data={{
                  labels: graphData.prices?.map((price) =>
                    new Date(price[0]).toLocaleString("en-US")
                  ),

                  datasets: [
                    {
                      label: `${coin.name} Price`,
                      title: "7-Day Graph",

                      fill: true,
                      backgroundColor:
                        graphData.prices?.[0]?.[1] >
                        graphData.prices?.[graphData.prices.length - 1]?.[1]
                          ? "#ea394366"
                          : "#16c78466",
                      borderColor:
                        graphData.prices?.[0]?.[1] >
                        graphData.prices?.[graphData.prices.length - 1]?.[1]
                          ? "#ea3943"
                          : "#16c784",
                      pointBackgroundColor:
                        graphData.prices?.[0]?.[1] >
                        graphData.prices?.[graphData.prices.length - 1]?.[1]
                          ? "#ea3943"
                          : "#16c784",
                      pointBorderColor:
                        graphData.prices?.[0]?.[1] >
                        graphData.prices?.[graphData.prices.length - 1]?.[1]
                          ? "red"
                          : "green",
                      pointHoverBackgroundColor: "#fff",
                      pointHoverBorderColor: "rgba(179,181,198,1)",
                      tooltipLabelColor: "rgba(179,181,198,1)",
                      data: graphData.prices?.map((price) => price[1]),
                    },
                  ],
                }}
                options={{
                  interaction: {
                    intersect: false,
                    mode: "index",
                  },
                  responsive: true,
                  plugins: {
                    legend: {
                      position: "bottom",
                    },
                    title: {
                      display: true,
                      text: "7-Day Graph",
                    },
                  },
                  scales: {
                    x: {
                      grid: {
                        display: false,
                      },
                      ticks: {
                        callback: () => "",
                      },
                    },
                    y: {
                      grid: {
                        display: true,
                      },
                    },
                  },
                  aspectRatio: 1.5,
                  tooltips: {
                    enabled: true,
                  },
                }}
              />
            </div>
          </div>
        </Container>
      ))}
    </div>
  );
}

export default React.memo(CoinDetails);
