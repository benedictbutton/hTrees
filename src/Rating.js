import React from "react";
import { Icon } from "@grafana/ui";

const Rating = ({ row }) => {
  console.log("row: ", row);
  const rating = new Array(Math.round(row.row.original.rating)).fill(0);
  const stars = rating.map((icon) => (
    <Icon name="star" style={{ display: "inline-block", color: "yellow" }} />
  ));

  return <div>{stars}</div>;
};

export default Rating;
