import { Container, Image } from "react-bootstrap";
import "./HeroStyles.css";

function Hero() {
  return (
    <>
      <Container className="hero mb-auto position-relative">
        <div className="h-40 hero-container">
          <Image
            className="img-fluid d-block h-full"
            src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2015/04/30/1133/Hyatt-Regency-Kathmandu-P278-The-Terrace.jpg/Hyatt-Regency-Kathmandu-P278-The-Terrace.4x3.jpg"
          />
        </div>
        <div className="hero-text">
          <h1 className="hero-title">Welcome to Hotel Finder</h1>
          <p className="hero-subtitle">
            Book more than 3 rooms to get discount
          </p>
        </div>
      </Container>
    </>
  );
}

export default Hero;
