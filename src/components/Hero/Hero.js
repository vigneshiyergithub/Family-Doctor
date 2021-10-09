import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Modal from "../Modal";
import { Modal as ResponsiveModal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

// hero styles
import "./Hero.css";

function Hero() {
  // adding the modal pop-up

  const [show, setShow] = useState(false);

  // function to show the modal
  const showModal = () => {
    setShow(true);
  };

  // function to close the modal
  const closeModal = () => {
    console.log("close");
    setShow(false);
  };
  return (
    <div className="hero-container" id="home">
      <Navbar />

      <div className="hero-description">
        <p>Be healthy now is so simple</p>
        <h1>We Take Care Of Your Health</h1>
        <ResponsiveModal open={show} onClose={closeModal} center>
          <Modal handleClose={closeModal}/>
        </ResponsiveModal>
        <button className="btn" onClick={showModal}>
          Request an appointment
        </button>
      </div>
    </div>
  );
}

export default Hero;
