import { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./SearchBarStyles.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

import { SearchContext } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const {
    roomType,
    checkInDate,
    checkOutDate,
    setCheckInDate,
    setCheckOutDate,
    setRoomType,
  } = useContext(SearchContext);
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [roomTypeLocal, setRoomTypeLocal] = useState(roomType);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };
  const handleEndDateChange = (date) => {
    setEndDate(date);
  };
  const handleSelectChange = (e) => {
    const selectV = e.target.value;
    setRoomTypeLocal(selectV);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCheckInDate(moment(startDate).format("YYYY-MM-DD"));
    setCheckOutDate(moment(endDate).format("YYYY-MM-DD"));
    setRoomType(roomTypeLocal);
    navigate("/search");
  };

  return (
    <div className="p-4 w-full search-container">
      <Form
        inline
        className="d-flex align-items-center search-form"
        onSubmit={handleSubmit}
      >
        <div className="d-inline">
          <DatePicker
            showIcon
            toggleCalendarOnIconClick
            onChange={(date) => handleStartDateChange(date)}
            selected={startDate}
            showDisabledMonthNavigation
            minDate={new Date()}
            //   maxDate={}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Check-in Date"
            className="mr-2"
            dateFormat="yyyy-MM-dd"
          />
        </div>
        <div className="d-inline">
          <DatePicker
            showIcon
            toggleCalendarOnIconClick
            selected={endDate}
            onChange={handleEndDateChange}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText="Check-out Date"
            className="mr-2"
            dateFormat="yyyy-MM-dd"
          />
        </div>
        <Form.Select
          aria-label="Default select example"
          className="select"
          onChange={handleSelectChange}
        >
          <option value="">Select type of room</option>
          <option value="1KB">1 King Bed</option>
          <option value="2TB">2 Twin Beds</option>
          <option value="1KBSV">1 King Bed with Stupa View</option>
          {/* <option value="2KBS">2 King Beds with Stupa View</option> */}
          <option value="1KBCAD">1 King Bed with Club Access Deluxe</option>
        </Form.Select>
        <Button
          variant="warning"
          className="mr-2 search-button b"
          type="submit"
        >
          Search
        </Button>
      </Form>
    </div>
  );
};

export default SearchBar;
