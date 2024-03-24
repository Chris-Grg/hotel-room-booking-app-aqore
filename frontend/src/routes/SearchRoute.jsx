import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import { RoomContext } from "../context/RoomContext";
import CardList from "../components/CardList";
import { Container } from "react-bootstrap";
import axios from "axios";
const SearchRoute = () => {
  const {
    roomType,
    checkInDate,
    checkOutDate,
    setCheckInDate,
    setCheckOutDate,
    setRoomType,
  } = useContext(SearchContext);
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_BACKEND_API || "http://localhost:7000";
    axios
      .post(`${apiUrl}/api/search`, {
        typeId: roomType,
        startDate: checkInDate,
        endDate: checkOutDate,
      })
      .then(function (response) {
        setSearchResult(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [checkInDate, checkOutDate, roomType]);

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
