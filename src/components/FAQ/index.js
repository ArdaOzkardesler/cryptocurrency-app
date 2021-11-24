import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import * as styles from "../../components/FAQ/styles.module.css";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function FAQ() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Container className={styles.container} maxWidth="xl">
        <h1 className={styles.fonth1}>Frequently Asked Questions</h1>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          defaultExpanded={true}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography className={styles.font}>
              What is "Market Capitalization" and how is it calculated?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={styles.details}>
            <Typography className={styles.font}>
              Market Capitalization is one way to rank the relative size of a
              cryptocurrency. It's calculated by multiplying the Price by the
              Circulating Supply. <br /> Market Cap = Price X Circulating
              Supply.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography className={styles.font}>
              What is the difference between "Circulating Supply", "Total
              Supply", and "Max Supply"?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={styles.details}>
            <Typography className={styles.font}>
              Circulating Supply is the best approximation of the number of
              coins that are circulating in the market and in the general
              public's hands. <br /> Total Supply is the total amount of coins
              in existence right now (minus any coins that have been verifiably
              burned). <br /> Max Supply is the best approximation of the
              maximum amount of coins that will ever exist in the lifetime of
              the cryptocurrency.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography className={styles.font}>
              Why is the Circulating Supply used in determining the market
              capitalization instead of Total Supply?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={styles.details}>
            <Typography className={styles.font}>
              We've found that Circulating Supply is a much better metric for
              determining the market capitalization. Coins that are locked,
              reserved, or not able to be sold on the public market are coins
              that can't affect the price and thus should not be allowed to
              affect the market capitalization as well. The method of using the
              Circulating Supply is analogous to the method of using public
              float for determining the market capitalization of companies in
              traditional investing.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography className={styles.font}>
              What is the difference between a "Coin" and a "Token" on the site?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={styles.details}>
            <Typography className={styles.font}>
              A Coin is a cryptocurrency that can operate independently. <br />{" "}
              A Token is a cryptocurrency that depends on another cryptocurrency
              as a platform to operate. Check out the crypto tokens listings to
              view a list of tokens and their respective platforms.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography className={styles.font}>
              In what time zone is the site based?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={styles.details}>
            <Typography className={styles.font}>
              Data is collected, recorded, and reported in UTC time unless
              otherwise specified.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography className={styles.font}>
              At what time is the 24 hour % change based?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={styles.details}>
            <Typography className={styles.font}>
              It's based on the current time. It's a rolling 24 hour period.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography className={styles.font}>
              Why are markets with no fees excluded from the price average and
              total trading volume?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={styles.details}>
            <Typography className={styles.font}>
              When no fees are being charged at the exchange, it is possible for
              a trader (or bot) to trade back and forth with themselves and
              generate a lot of "fake" volume without penalty. It's impossible
              to determine how much of the volume is fake so we exclude it
              entirely from the calculations.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </>
  );
}

export default React.memo(FAQ);
