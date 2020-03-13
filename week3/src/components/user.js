/**
 * IMPORTANT Import this whenever you wish to create a react component
 */
import React from "react";

export default function User(props) {
  return (
    <div className="User">
      <ul>
        <li>First Name: {props.first_name}</li>
        <li>Last Name: {props.last_name}</li>
        <li>E: {props.email}</li>
      </ul>
    </div>
  );
}
