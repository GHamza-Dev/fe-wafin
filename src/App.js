import { NavBar } from "./components/NavBar";
import Container from "./components/Container";
import Register from "./pages/Auth/register/Register";
import Login from "./pages/Auth/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Secret from "./pages/services/Secret";
import { Toaster } from "react-hot-toast";
import Profile from "./pages/profile/Profile";
import UpdateAccount from "./pages/profile/UpdateAccount";

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
          <Route path="profile" element={<Profile />}>
            <Route path="update" element={<UpdateAccount />} />
          </Route>
          <Route path="secret" element={<Secret />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
