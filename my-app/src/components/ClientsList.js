import FetchAllClients from "./FetchAllClients";
import React from "react";
import { useEffect, useState } from "react";
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from "mdb-react-ui-kit";

export default function TempTable() {
  const [timeslotData, setTimeSlotData] = useState([]);
  useEffect(() => {
    const FetchTimeSlots = async () => {
      let data = await FetchAllClients();
      console.log(data);
      setTimeSlotData(data);
    };
    FetchTimeSlots();
  }, []);

  return (
    <div>
      Temptable compontent
      <MDBTable>
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
          {timeslotData.map((timeslot, index) => (
            <tr>
              <th scope="row">{timeslot.id}</th>
              <td>{timeslot.Name}</td>
              <td>{timeslot.Date}</td>
              <td>{timeslot.Time}</td>
              <td>{timeslot.Contacts}</td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}
