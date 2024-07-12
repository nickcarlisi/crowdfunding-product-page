"use client";

import styles from "./Modal.module.scss";
import Card from "../Card/Card";
import PledgeCard from "../PledgeCard/PledgeCard";
import { useState } from "react";

export default function Modal({
  modalState,
  toggleModal,
  handleBackProject,
  handleTotalBackers,
  content,
  toggleThankYouModal,
  isSelected,
  handleDecrement,
  onDecrement,
}) {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  return (
    <div className={`${styles.container} ${modalState ? styles.active : ""}`}>
      <Card modal>
        <div className={styles.header}>
          <h2>Back this project</h2>
          <div className={styles.close} onClick={toggleModal}>
            <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
                fill="#000"
                fillRule="evenodd"
                opacity=".4"
              />
            </svg>
          </div>
        </div>
        <p>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <div className={styles.rewardCardContainer}>
          {content.map((item, index) => (
            <PledgeCard
              key={index}
              content={item}
              handleBackProject={handleBackProject}
              handleTotalBackers={handleTotalBackers}
              toggleModal={toggleModal}
              toggleThankYouModal={toggleThankYouModal}
              isSelected={isSelected}
              updateAmountBacked={handleBackProject}
              handleDecrement={handleDecrement}
              isOpen={index === selectedCard}
              onCardClick={() => handleCardClick(index)}
            />
          ))}
        </div>
      </Card>
    </div>
  );
}
