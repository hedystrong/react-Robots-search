import React from "react";
import { Card } from "../Card/card";

import "./style.css";

export const CardList = (props) => (
  <div className="card-list">
    {props.robots.map((el) => (
      <Card key={el.id} robot={el} />
    ))}
  </div>
);
