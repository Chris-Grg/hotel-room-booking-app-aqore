import { createContext, useState } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [modalShow, setModalShow] = useState(false);
  const [activeModal, setActiveModal] = useState();

  const openModal = (roomNo) => {
    setActiveModal(roomNo);
    setModalShow(true);
  };

  const closeModal = () => {
    setModalShow(false);
    setActiveModal("");
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
