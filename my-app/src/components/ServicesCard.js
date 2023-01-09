import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdb-react-ui-kit";

export default function ServicesCard(props) {
  return (
    <MDBCol>
      <MDBCard className="d-flex justify-content-center align-items-start h-100">
        <MDBCardBody style={{ width: "100%" }}>
          <MDBCardTitle className="text-center">{props.type}</MDBCardTitle>
          <MDBCardText>
            {props.description} {props.price}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}
