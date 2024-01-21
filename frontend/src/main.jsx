import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { ModalProvider } from "./context/ModalContext.jsx";
import { RoomContextProvider } from "./context/RoomContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RoomContextProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </RoomContextProvider>
  </React.StrictMode>
);
