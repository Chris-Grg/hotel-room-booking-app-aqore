import React, { createContext, useEffect, useState } from "react";

const RoomContext = createContext();

const RoomContextProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    const getRooms = async () => {
      const res = await fetch("http://localhost:7000/api/rooms");
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
