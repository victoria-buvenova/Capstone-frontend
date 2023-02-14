import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Footer from "./layout/Footer";
import About from "./pages/About";
import Login from "./pages/Login";
import ClientsList from "./components/ClientsList";
import BookAppointment from "./components/BookAppointment";
import { AuthProvider } from "./context/AuthProvider";
import { PrivateRoute } from "./components/PrivateRoute";
import { SugaringServices } from "./services/SugaringServices";
import { MakeupServices } from "./services/MakeupServices";
import { NailsServices } from "./services/NailsServices";
import { MyBookings } from "./components/MyBookings";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UsefulLink from "./components/UsefulLink";
import Faq from "./pages/Faq";
import NotFound from "./pages/NotFound";

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
