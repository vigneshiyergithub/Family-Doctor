import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { SERVICES_LIST } from "./utils";

import "./Services.css";

function Services() {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("false");
  const onOpenModal = (name) => {
    setOpen(true);
    const value = SERVICES_LIST.filter((item) => item.serviceName === name).map(
      (item) => item.serviceContent
    )?.[0];
    setContent(value);
  };
  const onCloseModal = () => setOpen(false);
  return (
    <div className="services-section" id="services">
      <h1>Our Services</h1>

      <div className="services-gallery">
        <div
          className="image"
          onClick={() => onOpenModal("Musculoskeletal physiotherapy")}
        >
          <img src="../../img/service1.jpg" alt="service" />
          <h5>Musculoskeletal physiotherapy</h5>
        </div>
        <div
          className="image"
          onClick={() => onOpenModal("Geriatric physiotherapy")}
        >
          <img src="../../img/service2.jpg" alt="service" />
          <h5>Geriatric physiotherapy</h5>
        </div>
        <div
          className="image"
          onClick={() => onOpenModal("Paediatric physiotherapy")}
        >
          <img src="../../img/service3.jpg" alt="service" />
          <h5>Paediatric physiotherapy</h5>
        </div>
        <div
          className="image"
          onClick={() => onOpenModal("Sports physiotherapy")}
        >
          <img src="../../img/service4.png" alt="service" />
          <h5>Sports physiotherapy</h5>
        </div>
        <div
          className="image"
          onClick={() =>
            onOpenModal("Physiotherapy for rehabilitation and pain management")
          }
        >
          <img src="../../img/service5.jpg" alt="service" />
          <h5>Physiotherapy for rehabilitation and pain management</h5>
        </div>
        <div
          className="image"
          onClick={() => onOpenModal("Neuro Physiotherapy")}
        >
          <img src="../../img/service6.jpg" alt="service" />
          <h5>Neuro Physiotherapy</h5>
        </div>
        {/* <div className="image">
					<img src="../img/service6.jpg" alt="service" />
					<h5>Dental Care</h5>
				</div> */}
      </div>
      <Modal open={open} onClose={onCloseModal} center>
        <div className={"service-modal"}>
          <h5>{content}</h5>
        </div>
      </Modal>
    </div>
  );
}

export default Services;
