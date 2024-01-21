import { useState } from "react";
import CardList from "../components/CardList";
import ModalComponent from "../components/ModalComponent";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

const SearchRoute = () => {
  return (
    <>
      <Container className="h-100 position: absolute">
        <CardList />
        <ModalComponent />
      </Container>
      <Footer />
    </>
  );
};

export default SearchRoute;
