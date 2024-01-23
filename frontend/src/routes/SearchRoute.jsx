import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { RoomContext } from "../context/RoomContext";
import CardList from "../components/CardList";
import { Container } from "react-bootstrap";

const SearchRoute = () => {
  const {
    roomType,
    checkInDate,
    checkOutDate,
    setCheckInDate,
    setCheckOutDate,
    setRoomType,
  } = useContext(SearchContext);
  const { rooms } = useContext(RoomContext);

  const searchResult = rooms.filter((i) => {
    if (roomType && room.bookedDate) {
      if (i.typeId === roomType) {
        if (i.bookedDate.length > 0) {
          if (!i.bookedDate.find((j) => j >= checkInDate && j <= checkOutDate))
            return i;
          else return false;
        } else return i;
      } else return false;
    }
  });
  return (
    <div>
      {searchResult.length > 0 ? (
        <CardList rooms={searchResult} />
      ) : (
        <Container
          className="d-flex justify-content-center"
          style={{ padding: "10rem" }}
        >
          <h1>No Search Results!</h1>
        </Container>
      )}
    </div>
  );
};

export default SearchRoute;
