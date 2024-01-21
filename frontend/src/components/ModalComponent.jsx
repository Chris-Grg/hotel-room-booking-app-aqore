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
    isLoading && activeModal === "" ? (
      <></>
    ) : (
      (activeRoom = rooms.find((i) => activeModal === i._id))
    );
  }
  console.log(activeRoom);
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
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Title:{activeRoom ? activeRoom.type : "Unknown Type"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Centered Modal</h4>
            <p>{activeRoom ? activeRoom.description : ""}</p>
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
