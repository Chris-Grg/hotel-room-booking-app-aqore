import React, { createContext, useState } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [modalShow, setModalShow] = useState(false);
  const [activeModal, setActiveModal] = useState("");

  const openModal = (modalId) => {
    setActiveModal(modalId);
    setModalShow(true);
  };

  const closeModal = () => {
    setModalShow(false);
    setActiveModal(null);
  };

  return (
    <ModalContext.Provider
      value={{ modalShow, activeModal, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
