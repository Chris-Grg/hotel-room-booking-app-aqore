import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ModalContext } from "../context/ModalContext";
import { RoomContext } from "../context/RoomContext";

function ModalComponent() {
  const { modalShow, activeModal, closeModal } = useContext(ModalContext);
  const { rooms, isLoading } = useContext(RoomContext);
  let activeRoom;
  {
    isLoading && !activeModal ? (
      <></>
    ) : (
      (activeRoom = rooms.find((i) => activeModal === i.roomNo))
    );
  }
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Modal
          show={modalShow}
          activeModal={activeModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onHide={closeModal}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {activeRoom ? activeRoom.title : "Loading title"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Description</h4>
            <p>{activeRoom ? activeRoom.description : ""}</p>
            <h4>Amenities</h4>
            <ul>
              {activeRoom
                ? activeRoom.amenities.map((i) => <li>{i}</li>)
                : "Loading"}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default ModalComponent;
