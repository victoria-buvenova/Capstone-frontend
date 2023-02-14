import { useState, useEffect } from "react";
import FetchServices from "../services/FetchServices";
import { useAuth } from "../context/AuthProvider";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdb-react-ui-kit";

export const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const { client } = useAuth();

  useEffect(() => {
    const updateBookings = async () => {
      let myData = await FetchServices(
        `http://localhost:8080/clients/mybookings?Contacts=${client}`
      );
      setBookings(myData);
    };
    updateBookings();
  }, []);

  if (bookings.length === 0) {
    return (
      <div>
        You do not have any bookings. To make a booking, please go to Home page
        and book an appointment
      </div>
    );
  }

  return (
    <div>
      <MDBCol className="d-flex justify-content-center h-100 m-4">
        <MDBCard
          className="d-flex justify-content-center h-80 m-4"
          style={{ height: "240px", width: "320px" }}
        >
          <MDBCardBody style={{ width: "100%" }}>
            <MDBCardTitle className="text-center">Your bookings</MDBCardTitle>{" "}
            {bookings.map((booking, index) => {
              return (
                <MDBCardText>
                  You have booking on {booking.Date} at {booking.Time}
                </MDBCardText>
              );
            })}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </div>
  );
};
