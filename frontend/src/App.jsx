import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBarComponent from "./components/Navbar";
// import CardList from "./components/CardList";
import SearchBar from "./components/SearchBar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SearchRoute from "./routes/SearchRoute";
import { useEffect, useState } from "react";

function App() {
  return (
    <>
      <NavBarComponent />
      <SearchBar />
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/search" element={<SearchRoute />} />
        </Routes>
      </Router>
      {/* <CardList /> */}
    </>
  );
}

export default App;
