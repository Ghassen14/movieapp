import React from "react";
import "./namefilter.css";

const Namefilter = ({ value = "", onChange = () => {} }) => (
  <div className="name-filter">
    <input
      className="name-filter-text"
      type="text"
      value={value}
      onChange={(event) => {
        onChange(event.target.value);
      }}
    />
  </div>
);
export default Namefilter;
