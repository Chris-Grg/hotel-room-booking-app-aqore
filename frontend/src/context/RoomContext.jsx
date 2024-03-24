import React, { createContext, useEffect, useState } from "react";

const RoomContext = createContext();

const RoomContextProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    const getRooms = async () => {
      const apiUrl =
        import.meta.env.VITE_BACKEND_API || "http://localhost:7000";
      const res = await fetch(`${apiUrl}/api/rooms`);
      const data = await res.json();
      setRooms(data);
      setisLoading(false);
    };
    getRooms();
  }, []);

  return (
    <RoomContext.Provider value={{ rooms, isLoading }}>
      {children}
    </RoomContext.Provider>
  );
};

export { RoomContext, RoomContextProvider };
