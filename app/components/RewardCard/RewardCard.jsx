import styles from "./RewardCard.module.scss";
import Card from "../Card/Card";

export default function RewardCard({ content, toggleModal, onItemClick }) {
  const handleButtonClick = () => {
    onItemClick(content.id);
  };

  return (
    <Card border>
      <div className={styles.header}>
        <h3 className="title">{content.title}</h3>
        <span className="pledge">{content.pledge}</span>
      </div>
      <p className="description">{content.description}</p>
      <div className={styles.footer}>
        <div className={styles.left}>
          <span>{content.left}</span>
          <p>left</p>
        </div>
        <button
          className={`${styles.button} ${
            content.left === 0 ? styles.outOfStock : ""
          }`}
          onClick={() => {
            toggleModal();
            handleButtonClick();
          }}
        >
          {content.left === 0 ? "Out of Stock" : "Select Reward"}
        </button>
      </div>
    </Card>
  );
}
