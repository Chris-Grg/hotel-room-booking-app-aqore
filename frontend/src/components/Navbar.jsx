import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartContext } from "../context/CartContext";
import { CartFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
const NavBarComponent = () => {
  const { CartItem } = useContext(CartContext);

  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Hotel Room Finder</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto">
            <Link to="/cart">
              <CartFill size={20} />
              {CartItem > 0 && (
                <span className="badge rounded-pill bg-secondary position-absolute top-100 start-100 translate-middle">
                  {CartItem}
                </span>
              )}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
