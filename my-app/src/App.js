import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import Services from "./components/Services";
// import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import About from "./components/About";
// import Shop from "./components/Shop";
import Login from "./components/Login";
// import AdminTable from './components/AdminTable';
// import Scheduler from './components/Scheduler';

import ClientsList from "./components/ClientsList";
import BookAppointment from "./components/BookAppointment";
import { AuthProvider } from "./context/AuthProvider";
import { PrivateRoute } from "./components/PrivateRoute";
import { SugaringServices } from "./components/SugaringServices";
import { MakeupServices } from "./components/MakeupServices";
import { NailsServices } from "./components/NailsServices";
import { MyBookings } from "./components/MyBookings";
// import AddTimeslot from "./components/AddTimeslot";

function App() {
  return (
    <AuthProvider>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/pricing" element={<Pricing />} />
        <Route path="/shop" element={<Shop />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book" element={<BookAppointment />} />
        <Route path="/sugaring" element={<SugaringServices />} />
        <Route path="/makeup" element={<MakeupServices />} />
        <Route path="/nails" element={<NailsServices />} />

        <Route
          path="/clients"
          element={
            <PrivateRoute>
              <ClientsList />
            </PrivateRoute>
          }
        />
        {/* <Route
          path="/mybookings"
          element={
            <PrivateRoute>
              <MyBookings />
            </PrivateRoute>
          }
        /> */}
      </Routes>

      <Footer />
    </AuthProvider>
  );
}

export default App;
