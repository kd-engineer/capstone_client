import React, { useState } from "react"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


const ReactDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <>
      <DatePicker
        className="contact-form-text"
        todayButton=""
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        required
        showYearDropdown
        dateFormatCalendar="MMMM"
        scrollableYearDropdown
        yearDropdownItemNumber={100}
        maxDate={new Date()}
        isClearable
        placeholderText="Birthdate"
      />
    </>
  )
}

export default ReactDatePicker
