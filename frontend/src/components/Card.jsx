import { useContext } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { ModalContext } from "../context/ModalContext";

function CardComponent({
  roomNo,
  title,
  typeId,
  description,
  price,
  image,
  amenities,
}) {
  const { openModal } = useContext(ModalContext);

  return (
    <Card className="w-100">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>
          <p className="small font-weight-light">{roomNo} </p>
          <span>{title}</span>
        </Card.Title>
        <Card.Text className="text-truncate">{description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between">
          <span>Price per night</span>
          <span>${price}</span>
        </ListGroup.Item>
      </ListGroup>
      <Card.Footer className="d-flex justify-content-center align-items-center">
        <Button
          variant="warning"
          className="flex-grow-1"
          onClick={() => openModal(roomNo)}
        >
          Book Now
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default CardComponent;
