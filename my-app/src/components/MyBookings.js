import "./styles.css";
import { useState, useEffect } from "react";
import FetchServices from "./FetchServices";
import ServicesCard from "./ServicesCard";

export const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

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
    return <div>...Loading!</div>;
  }

  return (
    <div>
      {bookings.map((booking, index) => {
        return <ServicesCard booking={booking} color={"info"} key={index} />;
      })}
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>Fetch Data and show them inside cards!</h1>
      <MyBookings />
    </div>
  );
}

// import React from "react";

// export function MyBookings() {
//   return <div>MyBookings</div>;
// }
