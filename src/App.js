import { NavBar } from "./components/NavBar";
import Container from "./components/Container";
import Register from "./pages/Auth/register/Register";
import Login from "./pages/Auth/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Profile from "./pages/profile/Profile";
import UpdateAccount from "./pages/profile/UpdateAccount";
import AddService from "./pages/profile/AddService";
import PrvServices from "./pages/profile/PrvServices";
import Vendors from "./pages/providers/Vendors";
import Vendor from "./pages/providers/Vendor";
import Service from "./pages/services/Service";
import Services from "./pages/services/Services";
import Orders from "./pages/profile/Orders";
import ClientOrders from "./pages/profile/ClientOrders";
import PrvRegister from "./pages/profile/PrvRegister";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Vendors />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="vendors" element={<Vendors />} />
          <Route path="vendor" element={<Vendor />} />
          <Route path="profile" element={<Profile />}>
            <Route path="register-provider" element={<PrvRegister />} />
            <Route path="update" element={<UpdateAccount />} />
            <Route path="prvservices" element={<PrvServices />} />
            <Route path="add-service" element={<AddService />} />
            <Route path="provider-orders" element={<Orders />} />
            <Route path="client-orders" element={<ClientOrders />} />
          </Route>
          <Route path="service" element={<Service />} />
          <Route path="services" element={<Services />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
