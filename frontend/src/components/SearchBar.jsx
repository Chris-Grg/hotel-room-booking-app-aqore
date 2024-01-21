import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./SearchBarStyles.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchBar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectValue, setSelectValue] = useState("");

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
    alert(
      `Start:${startDate.toISOString().split("T")[0]}, End:${
        endDate.toISOString().split("T")[0]
      }, Value:${selectValue}`
    );
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
            className="mr-2"
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
          <option value="2KB">2 Twin Beds</option>
          <option value="1KBS">1 King Bed with Stupa View</option>
          <option value="2KBS">2 King Beds with Stupa View</option>
          <option value="1KBCD">1 King Bed with Club Access Deluxe</option>
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
