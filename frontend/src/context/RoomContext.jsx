import React, { createContext, useEffect, useState } from "react";

const RoomContext = createContext();

const RoomContextProvider = ({ children }) => {
  const dummy_room = [
    {
      id: "1KB",
      title: "1 King Bed",
      description:
        "Serene garden or pool views are yours in a 36-square-metre room featuring one king bed, granite bath with tub and walk-in shower, and separate workdesk area with high-speed Internet access. Wooden flooring and Tibetan hand-woven carpeting reflect the surrounding culture, and deluxe amenities such as daily local newspaper and plush Terry robes allow for a relaxing stay.",
      amenities: [
        "Separate workdesk area",
        "Robes",
        "Hairdryer",
        "24-hour room service",
        "Minibar",
        "Coffee maker",
        "55’ LED TV",
        "Cable/satellite TV channels",
        "Three or more telephones",
        "Dual line phones",
        "Complimentary Wi-Fi",
        "Separate shower",
        "Analog phone line",
        "Iron/ironing board",
        "Windows that open",
        "24-hour concierge",
        "In-room safe",
        "Morning newspaper upon request",
        "Rollaways upon request",
        "Crib upon request",
      ],
      image:
        "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2014/09/21/1527/KATHM-P062-Guestroom.jpg/KATHM-P062-Guestroom.16x9.jpg",
      price: 144,
    },
    {
      id: "1KB",
      title: "1 King Bed",
      description:
        "Serene garden or pool views are yours in a 36-square-metre room featuring one king bed, granite bath with tub and walk-in shower, and separate workdesk area with high-speed Internet access. Wooden flooring and Tibetan hand-woven carpeting reflect the surrounding culture, and deluxe amenities such as daily local newspaper and plush Terry robes allow for a relaxing stay.",
      amenities: [
        "Separate workdesk area",
        "Robes",
        "Hairdryer",
        "24-hour room service",
        "Minibar",
        "Coffee maker",
        "55’ LED TV",
        "Cable/satellite TV channels",
        "Three or more telephones",
        "Dual line phones",
        "Complimentary Wi-Fi",
        "Separate shower",
        "Analog phone line",
        "Iron/ironing board",
        "Windows that open",
        "24-hour concierge",
        "In-room safe",
        "Morning newspaper upon request",
        "Rollaways upon request",
        "Crib upon request",
      ],
      image:
        "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2014/09/21/1527/KATHM-P062-Guestroom.jpg/KATHM-P062-Guestroom.16x9.jpg",
      price: 144,
    },
  ];

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
  console.log(rooms);

  return (
    <RoomContext.Provider value={{ rooms, isLoading }}>
      {children}
    </RoomContext.Provider>
  );
};

export { RoomContext, RoomContextProvider };
