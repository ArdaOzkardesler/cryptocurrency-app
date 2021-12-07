import React from "react";
import { Link } from "react-router-dom";
import * as styles from "../MobileLinks/styles.module.css";

function MobileLinks() {
  return (
    <div>
      <ul className={styles.listContainer}>
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
  );
}

export default MobileLinks;
