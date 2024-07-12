import { useState } from "react";

import styles from "./ProgressCard.module.scss";
import Card from "../Card/Card";

export default function ProgressCard({ amountBacked, totalBackers }) {
  const goalAmount = 100000;
  const progressPercentage = (amountBacked / goalAmount) * 100;

  return (
    <Card>
      <div className={styles.flexContainer}>
        <div className={styles.flexChild}>
          <span>${amountBacked.toLocaleString()}</span>
          <p>of $100,00 backed</p>
        </div>
        <div className={styles.flexChild}>
          <span>{totalBackers}</span>
          <p>total backers</p>
        </div>
        <div className={styles.flexChild}>
          <span>56</span>
          <p>days left</p>
        </div>
      </div>
      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </Card>
  );
}
