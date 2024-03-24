import CardComponent from "./Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CardList = ({ rooms }) => {
  return (
    <div className="position-relative">
      <Row xs={1} md={2} className="g-4 m-auto w-60">
        {rooms.length > 0 ? (
          rooms.map((i, idx) => {
            return (
              <Col key={idx}>
                <CardComponent
                  roomNo={i.roomNo}
                  title={i.title}
                  typeId={i.typeId}
                  description={i.description}
                  price={i.price}
                  image={i.image}
                  amenities={i.amenities}
                />
              </Col>
            );
          })
        ) : (
          <h1>No Rooms Available</h1>
        )}
      </Row>
    </div>
  );
};

export default CardList;
