import React from "react";
import { Link } from "react-router-dom";
import DarkMode from "../Header/switch";

import * as styles from "../../components/Header/styles.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.leftDiv}>
        <ul className={styles.left}>
          <li>
            <Link id="logo" className={styles.logo} to="/">
              <img
                src="https://cdn-icons-png.flaticon.com/64/2091/2091665.png"
                alt=""
                width="48"
                height="48"
                className={styles.logoImg}
              />
              CRYPTOMANIA
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/coins">
              Cryptocurrencies
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/exchanges">
              Exchanges
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/faq">
              FAQ
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.rightDiv}>
        <ul className={styles.right}>
          <li className={styles.toggle}>
            <DarkMode />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default React.memo(Header);
