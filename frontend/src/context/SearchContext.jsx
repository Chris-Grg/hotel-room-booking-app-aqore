import React, { createContext, useEffect, useState } from "react";

const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [roomType, setRoomType] = useState("");

  return (
    <SearchContext.Provider
      value={{
        roomType,
        checkInDate,
        checkOutDate,
        setCheckInDate,
        setCheckOutDate,
        setRoomType,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchContextProvider };
