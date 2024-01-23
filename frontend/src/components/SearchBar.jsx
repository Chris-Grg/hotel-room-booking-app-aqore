import { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./SearchBarStyles.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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

  const [startDate, setStartDate] = useState(checkInDate);
  const [endDate, setEndDate] = useState(checkOutDate);
  const [selectValue, setSelectValue] = useState(roomType);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };
  const handleEndDateChange = (date) => {
    setEndDate(date);
  };
  const handleSelectChange = (e) => {
    const selectV = e.target.value;
    setSelectValue(selectV);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(
    //   `Start:${startDate.toISOString().split("T")[0]}, End:${
    //     endDate.toISOString().split("T")[0]
    //   }, Value:${selectValue}`
    // );
    setCheckInDate(startDate.toISOString().split("T")[0]);
    setCheckOutDate(endDate.toISOString().split("T")[0]);
    setRoomType(selectValue);
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
          // value={selectValue}
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
