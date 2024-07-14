import { useState, useContext } from "react";
import { Context } from "app/page.jsx";

import styles from "./AboutCard.module.scss";
import Card from "../Card/Card";
import RewardCard from "../RewardCard/RewardCard";

export default function AboutCard({
  content,
  toggleModal,
  onItemClick,
  isSelected,
}) {
  const handleButtonClick = () => {
    onItemClick(item.id);
  };

  return (
    <Card>
      <h2>About this project</h2>
      <p className={styles.para}>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p className={styles.para}>
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>
      <div div className={styles.rewardCardContainer}>
        {content.map((item, index) => {
          // console.log(item.noShow);
          if (item.noShow === true) {
            return;
          }

          return (
            <RewardCard
              key={index}
              content={item}
              toggleModal={toggleModal}
              onItemClick={onItemClick}
              isSelected={isSelected}
              handleButtonClick={handleButtonClick}
            />
          );
        })}
      </div>
    </Card>
  );
}
