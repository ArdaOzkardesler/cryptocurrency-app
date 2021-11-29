import React from "react";

function Footer() {
  return (
    <div>
      <h4>
        &copy; 2021 Cryptomania. All rights reserved. Data provided by{" "}
        <a
          href="https://www.coingecko.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          CoinGecko
        </a>
      </h4>
    </div>
  );
}

export default React.memo(Footer);
