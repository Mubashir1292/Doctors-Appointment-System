import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import About from "../About/About";
import MyAppointments from "../Appointments/MyAppointments/MyAppointments";
import Doctors from "../Doctors/Doctors";
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import Contact from "../contact/Contact";
import Appointment from "../Appointments/Appointment";
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Home />} path="" />
      <Route element={<Login />} path="/login" />
      <Route element={<Signup />} path="/createAccount" />
      <Route element={<About />} path="/about" />
      <Route element={<MyAppointments />} path="/myAppointments" />
      <Route element={<Appointment />} path="/Appointment/:docId" />
      <Route element={<Doctors />} path="/doctors" />
      <Route element={<Doctors />} path="/doctors/:speciality" />
      <Route element={<Contact />} path="/contact" />
    </Routes>
  );
};
export default AppRoutes;
