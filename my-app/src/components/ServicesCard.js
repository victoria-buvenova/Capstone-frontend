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
      {/* <MDBCard className='h-80' style={{height:"240px", width: "320px"}} > */}
      <MDBCard className="d-flex justify-content-center align-items-start h-100">
        <MDBCardBody style={{ width: "100%" }}>
          <MDBCardTitle className="text-center">{props.type}</MDBCardTitle>
          <MDBCardText>
            {props.description} {props.price}
          </MDBCardText>

          {/* {props.fromCart ? <button type="button" class="btn btn-outline-info"Info onClick={() => removeFromCart(props.item.id)}>Remove</button>
      : <button type="button" class="btn btn-outline-info" onClick={() => addToCart(props.item)}>Add to cart</button>} */}
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}
