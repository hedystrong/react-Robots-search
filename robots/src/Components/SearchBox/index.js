import React from "react";
import "./style.css";

export const Search = (props) => (
  <input
    className="search-box"
    type="search"
    placeholder="Robotuudaas haih..."
    onChange={props.onSearch}
  />
);
