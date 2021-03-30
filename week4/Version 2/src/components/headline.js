/**
 * IMPORTANT Import this whenever you wish to create a react component
 */
import React from "react";
import LikeCounter from "./likeCounter";

export default function Headline({ key, time, text, temp, wind }) {
  return (
    <div className="Headline">
      <h2>{time}</h2>
      <h2>{text}</h2>
      <p>
        Temp: {temp} &deg;C, Wind: {wind} km/h
      </p>
      <LikeCounter />
    </div>
  );
}

/* Example using props
export default function Headline(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <LikeCounter />
    </div>
  );
}
*/
