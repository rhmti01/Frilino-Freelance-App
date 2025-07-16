import React from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function DatePickerField({ label, date, setDate, required, register, errors }) {
  return (
    <div className=" mt-2 ">
      <span className=" p-3 block text-right font-semilight text-secondary-700 ">
        {label} {required && <span className=" text-red-500 ">*</span>}
      </span>
      <DatePicker
        format="YYYY/MM/DD"
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-center"
        value={date}
        onChange={(date) => setDate(date)}
        containerClassName=" numberInput  "
        inputClass="custom-input"
      />
    </div>
  );
}

export default DatePickerField;
