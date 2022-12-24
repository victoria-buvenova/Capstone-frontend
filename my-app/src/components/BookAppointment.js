import React from "react";
import Button from "react-bootstrap/Button";
import { MDBBtn } from "mdb-react-ui-kit";
import { useState, useEffect } from "react";
import FetchAllClients from "./FetchAllClients";

export default function BookAppointment() {
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
      <div className="container p-3 my-3 border">
        <h3>Book your appointment</h3>
        <div className="d-flex justify-content-center flex-wrap d-grid gap-3 p-4 m-4">
          {/* <MDBBtn rounded className="mx-2" color="primary" size="lg">
            {" "}
            Mon <br></br>26 Dec
          </MDBBtn> */}
          {timeslotData.map((timeslot, index) => (
            <MDBBtn rounded className="mx-2" color="primary" size="lg">
              {timeslot.Date}
            </MDBBtn>
          ))}
          {/* <MDBBtn rounded className="mx-2" color="primary" size="lg">
            {" "}
            Tue <br></br>27 Dec
          </MDBBtn>
          <MDBBtn rounded className="mx-2" color="primary" size="lg">
            {" "}
            Wed <br></br>28 Dec
          </MDBBtn>
          <MDBBtn rounded className="mx-2" color="primary" size="lg">
            {" "}
            Thu <br></br>29 Dec
          </MDBBtn>
          <MDBBtn rounded className="mx-2" color="primary" size="lg">
            {" "}
            Fri <br></br>30 Dec
          </MDBBtn>
          <MDBBtn rounded className="mx-2" color="primary" size="lg">
            {" "}
            Sat <br></br>31 Dec
          </MDBBtn> */}
        </div>

        <div className="d-flex justify-content-center flex-wrap d-grid gap-3 p-4 m-4">
          {timeslotData.map((timeslot, index) => (
            <Button variant="outline-primary" size="lg">
              {timeslot.Time}
              {/* <br></br> {timeslot.Date} */}
            </Button>
          ))}
          {/* <Button variant="outline-primary" size="lg">
            13:30pm
          </Button>{" "}
          <Button variant="outline-primary" size="lg">
            14:30pm
          </Button>{" "}
          <Button variant="outline-primary" size="lg">
            15:30pm
          </Button>{" "}
          <Button variant="outline-primary" size="lg">
            16:30pm
          </Button>{" "}
          <Button variant="outline-primary" size="lg">
            17:30pm
          </Button>{" "}
          <Button variant="outline-primary" size="lg">
            17:30pm
          </Button>{" "}
          <Button variant="outline-primary" size="lg">
            18:30pm
          </Button>{" "} */}
        </div>
        <div className="d-grid gap-2 col-3 mx-auto">
          <MDBBtn rounded className="mx-2" color="success" size="lg">
            BOOK
          </MDBBtn>
        </div>
      </div>
    </div>
  );
}
