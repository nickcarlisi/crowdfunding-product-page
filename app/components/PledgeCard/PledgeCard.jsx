"use client";

import { useState, useEffect } from "react";

import styles from "./PledgeCard.module.scss";
import Card from "../Card/Card";

export default function PledgeCard({
  content,
  index,
  handleBackProject,
  handleTotalBackers,
  toggleModal,
  toggleThankYouModal,
  isSelected,
  updateAmountBacked,
  handleDecrement,
  onDecrement,
  onCardClick,
  isOpen,
}) {
  const [isMobile, setIsMobile] = useState(false);

  const handleClick = () => {
    onCardClick();
    // ...other code
  };

  useEffect(() => {
    // Check if window is defined (i.e., we are in a browser context)
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(max-width: 768px)");

      // Define a function to update the state when the media query matches
      const handleMediaQueryChange = (e) => {
        setIsMobile(e.matches);
      };

      // Attach the listener and call it once to set the initial state
      mediaQuery.addListener(handleMediaQueryChange);
      setIsMobile(mediaQuery.matches);

      // Clean up the listener when the component unmounts
      return () => {
        mediaQuery.removeListener(handleMediaQueryChange);
      };
    }
  }, []);

  // Initialize the state to keep track of whether the radio button is selected
  const [selectedOption, setSelectedOption] = useState(null);

  // Function to handle changes when the radio button is clicked
  const handleRadioChange = (option) => {
    setSelectedOption(option); // Toggle the state
    onCardClick();
  };

  const [inputValue, setInputValue] = useState(content.min);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    // console.log(e.target.value);
  };

  const handleSubtractClick = () => {
    const amountToSubtract = parseFloat(inputValue);
    if (!isNaN(amountToSubtract)) {
      updateAmountBacked(amountToSubtract);
      setInputValue(""); // Clear the input field after subtraction
    }
  };

  return (
    <Card border>
      <div className={`${styles.reward} ${isOpen ? styles.open : ""}`}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.headerFlex}>
              <div className={styles.radio}>
                <input
                  className={styles.customRadio}
                  type="radio"
                  id={`radio${index}`}
                  name="pledge"
                  value={content.title}
                  checked={isSelected}
                  onChange={() => handleRadioChange(content.title)}
                  onClick={handleClick}
                />
              </div>
              {/* <h3 className="title">{content.title}</h3> */}
              <label className="title" htmlFor="radio">
                {content.title}
              </label>

              {content.noShow ? null : (
                <span className="pledge">{content.pledge}</span>
              )}
            </div>
          </div>
          {!isMobile
            ? (content.noShow = false.toString() ? (
                <div
                  className={`${styles.headerRight} ${styles.leftContainer}`}
                >
                  <span className={styles.left}>{content.left}</span>
                  <p>left</p>
                </div>
              ) : null)
            : null}
        </div>
        <p className="description">{content.description}</p>
        {isMobile
          ? (content.noShow = true.toString() ? (
              <div className={styles.leftContainer}>
                <span className={styles.left}>{content.left}</span>
                <p>left</p>
              </div>
            ) : null)
          : null}
        <div
          className={`${styles.footer} ${
            selectedOption === content.title ? styles.selected : ""
          }`}
        >
          <div className={styles.footerLeft}>Enter your pledge</div>
          <div className={styles.footerRight}>
            <div className={styles.inputContainer}>
              $
              <input
                className={styles.input}
                type="number"
                value={inputValue}
                onChange={handleInputChange}
                onFocus={(e) => {
                  if (e.target.value === content.min.toString()) {
                    setInputValue("");
                  }
                }}
                onBlur={(e) => {
                  if (
                    e.target.value === "" ||
                    parseFloat(e.target.value) < content.min
                  ) {
                    setInputValue(content.min);
                  }
                }}
                min={content.min}
                placeholder={content.min}
              />
            </div>
            <button
              className={`${styles.button} ${
                content.left === 0 ? styles.outOfStock : ""
              }`}
              onClick={() => {
                handleBackProject(inputValue);
                handleTotalBackers();
                toggleModal();
                toggleThankYouModal();
                handleSubtractClick();
                handleDecrement(content.id);
              }}
              disabled={parseFloat(inputValue) < content.min}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}
