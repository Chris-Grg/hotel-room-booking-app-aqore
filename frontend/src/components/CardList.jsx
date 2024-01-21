import CardComponent from "./Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { RoomContext } from "../context/RoomContext";
import { useContext } from "react";

const CardList = () => {
  const { rooms } = useContext(RoomContext);

  return (
    <div className="position-relative">
      <Row xs={1} md={2} className="g-4 m-auto w-50">
        {rooms.length > 0 ? (
          rooms.map((i, idx) => {
            return (
              <Col key={idx}>
                <CardComponent
                  title={i.type}
                  description={i.description}
                  price={i.price}
                  roomid={i._id}
                />
              </Col>
            );
          })
        ) : (
          <h1>{rooms}</h1>
        )}
      </Row>
    </div>
  );
};

export default CardList;
