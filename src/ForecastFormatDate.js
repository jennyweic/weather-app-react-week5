import React from "react";

export default function FormattedDate(props) {
  console.log(props.date);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  let day = days[props.date.getDay()];
  return <div>{day}</div>;
}
