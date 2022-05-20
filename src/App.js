import { NavBar } from "./components/NavBar";
import Container from "./components/Container";
import Register from "./pages/Auth/register/Register";

function App() {
  
  return (
    <>
      <NavBar />
      <Container>
        <Register />
      </Container>
    </>
  );
}

export default App;
