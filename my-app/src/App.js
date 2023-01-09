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
import { SugaringServices } from "./services/SugaringServices";
import { MakeupServices } from "./services/MakeupServices";
import { NailsServices } from "./services/NailsServices";
import { MyBookings } from "./components/MyBookings";
// import AddTimeslot from "./components/AddTimeslot";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UsefulLink from "./components/UsefulLink";
import Faq from "./components/Faq";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <AuthProvider>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book" element={<BookAppointment />} />
        <Route path="/sugaring" element={<SugaringServices />} />
        <Route path="/makeup" element={<MakeupServices />} />
        <Route path="/nails" element={<NailsServices />} />
        <Route path="/sugaringvswaxing" element={<UsefulLink />} />
        <Route path="/faq" element={<Faq />} />
        {/* <Route path="/mybookings" element={<MyBookings />} /> */}
        <Route path="*" element={<NotFound />} />

        <Route
          path="/mybookings"
          element={
            <PrivateRoute>
              <MyBookings />
            </PrivateRoute>
          }
        />

        <Route
          path="/clients"
          element={
            <PrivateRoute>
              <ClientsList />
            </PrivateRoute>
          }
        />
      </Routes>

      <Footer />
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
