import "./styles.css";
import { useState, useEffect } from "react";
import FetchServices from "./FetchServices";
import ServicesCard from "./ServicesCard";
import { useAuth } from "../context/AuthProvider";

export const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const context = useAuth();

  useEffect(() => {
    const updateBookings = async () => {
      let myData = await FetchServices(
        "http://localhost:8080/clients/mybookings"
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
    console.log(context),
    (
      <div>
        {bookings.map((booking, index) => {
          return <ServicesCard booking={booking} color={"info"} key={index} />;
        })}
      </div>
    )
  );
};
