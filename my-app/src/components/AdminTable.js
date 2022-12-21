import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from "mdb-react-ui-kit";

export default function AdminTable(props) {
  return (
    <MDBTable hover>
      <MDBTableHead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Date</th>
          <th scope="col">Time</th>
          <th scope="col">Contacts</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          {props.clientName}
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          {props.dateAvail}
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          {props.timeSlot}
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
          {props.clientContacts}
        </tr>
      </MDBTableBody>
      <MDBBtn rounded className="mx-2" color="secondary">
        Add time
      </MDBBtn>
    </MDBTable>
  );
}
