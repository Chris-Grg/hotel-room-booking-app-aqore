import { useContext } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Hero from "./components/Hero";
import NavBarComponent from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ModalComponent from "./components/ModalComponent";

import SearchRoute from "./routes/SearchRoute";
import CartPage from "./routes/CartPage";

import { ModalContext } from "./context/ModalContext";

function App() {
  const { activeModal } = useContext(ModalContext);
  return (
    <>
      <Router>
        <NavBarComponent />
        <ToastContainer />
        <SearchBar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/search" element={<SearchRoute />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        {activeModal ? <ModalComponent /> : <></>}
      </Router>
    </>
  );
}

export default App;
