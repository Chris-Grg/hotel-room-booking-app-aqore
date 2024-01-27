import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Image } from "react-bootstrap";

import { ModalContext } from "../context/ModalContext";
import { RoomContext } from "../context/RoomContext";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";
import { SearchContext } from "../context/SearchContext";

function ModalComponent() {
  const { modalShow, activeModal, closeModal } = useContext(ModalContext);
  const { rooms, isLoading } = useContext(RoomContext);
  const { CartItem, setCartItem } = useContext(CartContext);
  const { checkInDate, checkOutDate } = useContext(SearchContext);

  let activeRoom;
  {
    isLoading && !activeModal ? (
      <></>
    ) : (
      (activeRoom = rooms.find((i) => activeModal === i.roomNo))
    );
  }

  const handleAddToCart = (activeRoom) => {
    const duplicateData = CartItem.find(
      (room) =>
        room.roomNo === activeModal &&
        room.checkInDate === checkInDate &&
        room.checkOutDate === checkOutDate
    );

    if (duplicateData) {
      toast.error("Room already added for those dates");
    } else {
      setCartItem((prevState) => [
        ...prevState,
        {
          id: CartItem.length + 1,
          roomType: activeRoom.title,
          price: activeRoom.price,
          roomNo: activeRoom.roomNo,
          checkInDate: checkInDate,
          checkOutDate: checkOutDate,
        },
      ]);
      toast.success(`Room added to cart successfully!`);
    }
  };
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
            <Image
              src={activeRoom ? activeRoom.image : "Loading image"}
              fluid
            ></Image>
            <h4>Description</h4>
            <p>{activeRoom ? activeRoom.description : ""}</p>
            <h4>Amenities</h4>
            <ul>
              {activeRoom
                ? activeRoom.amenities.map((i, idx) => <li key={idx}>{i}</li>)
                : "Loading"}
            </ul>
          </Modal.Body>
          <Modal.Footer className="justify-content-between">
            {activeRoom && (
              <Button
                onClick={() => handleAddToCart(activeRoom)}
                variant="warning"
              >
                Add to Cart
              </Button>
            )}
            <Button onClick={closeModal} variant="warning">
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default ModalComponent;
