/**
 * IMPORTANT Import this whenever you wish to create a react component
 */
import React from "react";
import LikeCounter from "./likeCounter";

export default function Headline({ title }) {
  return (
    <div className="Headline">
      <h1>{title}</h1>
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
