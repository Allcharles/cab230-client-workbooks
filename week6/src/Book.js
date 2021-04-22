import React from "react";
import { Button } from "reactstrap";
import { useHistory, useLocation } from "react-router-dom";

export default function Book() {
  const history = useHistory();
  const params = new URLSearchParams(useLocation().search);
  const title = params.get("title");

  return (
    <div className="container">
      <h1>Individual Book</h1>
      <p>The book that you selected was: {title}</p>
      <Button color="info" size="sm" className="mt-3" onClick={() => history.goBack()}>
        Back
      </Button>
    </div>
  );
}
