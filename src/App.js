import "./App.css";
import * as React from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CoinsProvider } from "./Context/CoinsContext";
import { ExchangeProvider } from "./Context/ExchangeContext";
import { useTheme } from "./Context/ThemeContext";
import FAQ from "./components/FAQ";
import Exchanges from "./components/Exchanges";
import CoinDetails from "./components/CoinDetails";
import MobileLinks from "./components/MobileLinks";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

function App() {
  const { themes } = useTheme();

  const theme = createTheme({
    palette: {
      mode: themes,
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Paper>
          <ExchangeProvider>
            <CoinsProvider>
              <Router>
                <div>
                  <Header />
                  <MobileLinks />
                  <Routes>
                    <Route path="/" element={<List />} exact />
                    <Route path="/coins" element={<List />} />
                    <Route path="/exchanges" element={<Exchanges />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/coins/:id" element={<CoinDetails />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </div>
              </Router>
            </CoinsProvider>
          </ExchangeProvider>

          <Footer />
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
