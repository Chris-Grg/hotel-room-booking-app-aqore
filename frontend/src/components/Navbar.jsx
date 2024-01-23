import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Hotel Room Finder</Navbar.Brand>
        <Nav className="me-auto">
          {/* <Nav.Link href="#home">Home</Nav.Link> */}
          <Nav.Link href="/browse">Browse</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
