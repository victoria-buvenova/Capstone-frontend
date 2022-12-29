import React from "react";
import { MDBSpinner } from "mdb-react-ui-kit";

export default function Spinner() {
  return (
    <MDBSpinner grow>
      <span className="visually-hidden">Loading...</span>
    </MDBSpinner>
  );
}
