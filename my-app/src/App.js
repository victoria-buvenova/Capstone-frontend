import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import About from "./components/About";
import Shop from "./components/Shop";
import Login from "./components/Login";
// import AdminTable from './components/AdminTable';
// import Scheduler from './components/Scheduler';
import BookSample from "./components/BookAppointment";
import ClientsList from "./components/ClientsList";
import BookAppointment from "./components/BookAppointment";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book" element={<BookAppointment />} />
      </Routes>

      <Footer />

      {/* <ClientsList/> */}
    </>
  );
}

export default App;
