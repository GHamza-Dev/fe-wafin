import { Select } from "./components/Select";
import { Input } from "./components/Input";
import { NavBar } from "./components/NavBar";
import Container from "./components/Container";

import sideImage from "./assets/side-image.jpg";

function App() {
  const opts = [
    { value: "safi1", label: "Safi - 1" },
    { value: "safi2", label: "Safi - 2" },
    { value: "safi3", label: "Safi - 3" },
  ];
  return (
    <>
      <Container>
        <NavBar />
        <div className="w-10/12 max-w-x mx-auto bg-white mb-4">
          <h2 className="my-7 font-bold text-darken text-2xl">
            Créer un compte
          </h2>
          <div className="flex border rounded-lg overflow-hidden max-h-screen">
            <form className="flex-1 p-4 md:p-6 lg:p-7">
              {/* input group */}
              <Input
                label="CINE"
                id="cnie"
                type="text"
                holder="Entre votre cnie"
              />
              {/* row */}
              <div className="flex gap-x-3">
                <Input
                  label="Nom"
                  id="fname"
                  type="text"
                  holder="Entre votre nom"
                  classes="grow"
                />
                <Input
                  label="Prénom"
                  id="lname"
                  type="text"
                  holder="Entre votre prénom"
                  classes="grow"
                />
              </div>
              {/* input group */}
              <Input
                label="Profession"
                id="profession"
                type="text"
                holder="Entre votre profession"
              />
              {/* input group */}
              <Input
                label="Email"
                id="email"
                type="email"
                holder="Entre votre email"
              />
              {/* row */}
              <div className="flex gap-x-3">
                <Select label="Vile" id="city" opts={opts} />
                <Input
                  label="Code postal"
                  id="zipcode"
                  type="text"
                  holder="Entre votre code postal"
                  classes="grow"
                />
              </div>
              {/* input group */}
              <Input
                label="Address"
                id="address"
                type="text"
                holder="Entre votre address"
              />
              <div className="my-5 flex items-center">
                <input
                  type="checkbox"
                  className="appearance-none border border-slate-300 p-2 rounded-md"
                />
                <p className="text-base">
                  <a className="underline ml-2 font-light" href="#">
                    Agree to our term of use
                  </a>
                </p>
              </div>
              <div className="flex justify-end mt-5">
                <button className="btn-primary bg-darken hover:bg-primary rounded-md">
                  Confirmer
                </button>
              </div>
              <p className="text-base text-center mt-6">
                <a className="underline ml-2 font-light" href="#">
                  Vous avis déjà un compte? se connecter
                </a>
              </p>
            </form>
            <div className="flex-1 hidden md:block">
              <img className="w-full" src={sideImage} alt="call center" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
