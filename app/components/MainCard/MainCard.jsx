import React, { useContext } from "react";
import styles from "./MainCard.module.scss";
import Card from "../Card/Card";

export default function MainCard({ toggleModal }) {
  return (
    <Card main>
      <h1>Mastercraft Bamboo Monitor Riser</h1>
      <p className={styles.para}>
        A beautifully handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className={styles.flexContainer}>
        <button className={styles.togglemodal} onClick={toggleModal}>
          Back this project
        </button>
        <div className={styles.bookMarkContainer}>
          <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
              <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
            </g>
          </svg>
          <p className={styles.bookmark}>Bookmark</p>
        </div>
      </div>
    </Card>
  );
}
