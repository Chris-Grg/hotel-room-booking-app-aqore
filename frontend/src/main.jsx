import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ModalProvider } from "./context/ModalContext.jsx";
import { RoomContextProvider } from "./context/RoomContext.jsx";
import { SearchContextProvider } from "./context/SearchContext.jsx";
import { CartContextProvider } from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartContextProvider>
      <RoomContextProvider>
        <SearchContextProvider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </SearchContextProvider>
      </RoomContextProvider>
    </CartContextProvider>
  </React.StrictMode>
);
