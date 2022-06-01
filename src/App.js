import { NavBar } from "./components/NavBar";
import Container from "./components/Container";
import Register from "./pages/Auth/register/Register";
import Login from "./pages/Auth/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Profile from "./pages/profile/Profile";
import UpdateAccount from "./pages/profile/UpdateAccount";
import AddService from "./pages/profile/AddService";
import Services from "./pages/profile/Services";
import Vendors from "./pages/providers/Vendors";
import Vendor from "./pages/providers/Vendor";
import Service from "./pages/services/Service";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<div>Abs path /</div>} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="vendors" element={<Vendors />} />
          <Route path="vendor" element={<Vendor />} />
          <Route path="profile" element={<Profile />}>
            <Route path="update" element={<UpdateAccount />} />
            <Route path="services" element={<Services />} />
            <Route path="add-service" element={<AddService />} />
          </Route>
          <Route path="service" element={<Service />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
