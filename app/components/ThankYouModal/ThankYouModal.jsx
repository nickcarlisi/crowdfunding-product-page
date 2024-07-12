import styles from "./ThankYouModal.module.scss";
import Card from "../Card/Card";
import Image from "next/image";

export default function ThankYouModal({
  thankYouModalState,
  toggleThankYouModal,
}) {
  return (
    <div
      className={`${styles.container} ${
        thankYouModalState ? styles.active : ""
      }`}
    >
      <Card>
        <div className={styles.flexContainer}>
          <Image
            src="/images/icon-check.svg"
            alt="Checkmark Icon"
            height={64}
            width={64}
          />
          <h1>Thanks for your support!</h1>
          <p>
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed.
          </p>
          <button className={styles.button} onClick={toggleThankYouModal}>
            Got it!
          </button>
        </div>
      </Card>
    </div>
  );
}
