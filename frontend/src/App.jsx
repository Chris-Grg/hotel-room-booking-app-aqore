import Hero from "./components/Hero";
import NavBarComponent from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SearchRoute from "./routes/SearchRoute";
import BrowseRoute from "./routes/BrowseRoute";
import ModalComponent from "./components/ModalComponent";
import { useContext } from "react";
import { ModalContext } from "./context/ModalContext";

function App() {
  const { activeModal } = useContext(ModalContext);
  return (
    <>
      <Router>
        <NavBarComponent />
        <SearchBar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/search" element={<SearchRoute />} />
          <Route path="/browse" element={<BrowseRoute />} />
        </Routes>
        {activeModal ? <ModalComponent /> : <></>}
      </Router>
    </>
  );
}

export default App;
