import { useContext } from "react";
import CardList from "../components/CardList";
import { Container } from "react-bootstrap";
import { RoomContext } from "../context/RoomContext";

const BrowseRoute = () => {
  const { rooms } = useContext(RoomContext);

  return (
    <>
      <Container className="h-100 position: absolute">
        <CardList rooms={rooms} />
      </Container>
    </>
  );
};

export default BrowseRoute;
