"use client";

import React, { useState } from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import MainCard from "./components/MainCard/MainCard";
import ProgressCard from "./components/ProgressCard/ProgressCard";
import AboutCard from "./components/AboutCard/AboutCard";
import Modal from "./components/Modal/Modal";
import ThankYouModal from "./components/ThankYouModal/ThankYouModal";

export default function Home() {
  const [content, setContent] = useState([
    {
      id: 1,
      title: "Pledge with no reward",
      pledge: "Pledge $0 or more",
      description:
        "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
      left: 0,
      min: 0,
      noShow: true,
    },
    {
      id: 2,
      title: "Bamboo Stand",
      pledge: "Pledge $25 or more",
      description:
        "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      left: 101,
      min: 25,
      noShow: false,
    },
    {
      id: 3,
      title: "Black Edition Stand",
      pledge: "Pledge $75 or more",
      description:
        "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      left: 64,
      min: 75,
      noShow: false,
    },
    {
      id: 4,
      title: "Mahogany Special Edition",
      pledge: "Pledge $200 or more",
      description:
        "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      left: 0,
      min: 200,
      noShow: false,
    },
  ]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalState, setModalState] = useState(false);
  const [thankYouModalState, setThankYouModalState] = useState(false);

  const handleItemClick = (id) => {
    setSelectedItem(id);
  };

  function toggleModal() {
    setModalState(!modalState);
  }

  function toggleThankYouModal() {
    setThankYouModalState(!thankYouModalState);
  }

  const [amountBacked, setAmountBacked] = useState(89914);
  const [totalBackers, setTotalBackers] = useState(5007);

  const handleBackProject = (newAmount) => {
    setAmountBacked(() => amountBacked + newAmount);
    console.log(amountBacked);
  };

  const handleTotalBackers = () => {
    setTotalBackers(totalBackers + 1);
  };

  const handleDecrement = (itemId) => {
    // Create a new array with updated "left" values
    const updatedItems = content.map((item) => {
      if (item.id === itemId && item.left > 0) {
        return { ...item, left: item.left - 1 };
      }
      return item;
    });

    // Update the state with the new array
    setContent(updatedItems);
  };

  return (
    <>
      <div className={styles.heroImgContainer}>
        <Image
          src="/images/image-hero-desktop.jpg"
          alt="product"
          fill
          priority
        />
      </div>
      <MainCard toggleModal={toggleModal} />
      <ProgressCard amountBacked={amountBacked} totalBackers={totalBackers} />
      <AboutCard
        content={content}
        toggleModal={toggleModal}
        isSelected={selectedItem === content.id}
        onItemClick={handleItemClick}
      />
      <Modal
        content={content}
        handleBackProject={handleBackProject}
        handleTotalBackers={handleTotalBackers}
        modalState={modalState}
        toggleModal={toggleModal}
        thankYouModalState={thankYouModalState}
        setThankYouModalState={setThankYouModalState}
        toggleThankYouModal={toggleThankYouModal}
        handleDecrement={handleDecrement}
      />
      <ThankYouModal
        thankYouModalState={thankYouModalState}
        toggleThankYouModal={toggleThankYouModal}
      />
    </>
  );
}
