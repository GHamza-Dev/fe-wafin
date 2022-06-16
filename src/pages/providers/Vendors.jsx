import PageTop from "../../components/PageTop";
import ProviderCard from "./components/ProviderCard";
import Loading from "../../components/hoc/Loading";

import image1 from "../../assets/provider1.jpg";
import image2 from "../../assets/provider2.jpg";
import image3 from "../../assets/provider3.jpg";
import image4 from "../../assets/provider4.jpg";
import image5 from "../../assets/provider5.jpg";

import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

import clientService from "../../services/userService";

const images = [image1, image2, image3, image4, image5];

const Vendors = () => {
  const [filterInputs, setFilterInputs] = useState({
    last_name: "",
    profession: "",
    city: "",
  });

  const [providers, setProviders] = useState([]);

  const onFilterChange = (e) => {
    setFilterInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const { last_name, profession } = filterInputs;

  const onSearchSubmit = (e) => {
    e.preventDefault();

    if (!filterInputs.city && !profession && !last_name) return;

    clientService
      .searchProviders(filterInputs)
      .then((res) => setProviders(res.data));
  };

  useEffect(() => {
    clientService.getAllProviders().then((res) => setProviders(res));
  }, []);

  return (
    <div className="w-11/12 max-w-screen-2xl mx-auto my-4">
      {!providers && <Loading />}
      <PageTop
        h2="Nous avant fair a votre desposetion plus que 1000 service"
        p="Faire une recherch"
      />
      {/* SERACH BAR */}
      <div className="my-3 bg-white  wshadow rounded-md overflow-hidden">
        <form>
          <div className="flex flex-col md:items-center md:flex-row">
            <div className="flex gap-3 p-2 md:px-3 flex-1">
              <div className="flex-1 w-full">
                <input
                  className="input focus:w-96 focus:max-w-full md:focus:w-full transition-all"
                  placeholder="Nom et/ou prénom de vendeur"
                  type="text"
                  name="last_name"
                  value={last_name}
                  onChange={onFilterChange}
                />
              </div>
              <div className="flex-1 w-full">
                <input
                  className="input focus:w-96 focus:max-w-full md:focus:w-full transition-all"
                  placeholder="profesion"
                  type="text"
                  name="profession"
                  value={profession}
                  onChange={onFilterChange}
                />
              </div>
              <div className="flex-1">
                <select className="input" name="city" onChange={onFilterChange}>
                  <option value="">Ville</option>
                  <option value="1">Safi</option>
                  <option value="2">Marakkech</option>
                  <option value="3">Salé</option>
                  <option value="4">Titouane</option>
                </select>
              </div>
            </div>
            <button
              onClick={onSearchSubmit}
              className="bg-blue p-4 md:p-5 md:rounded-bl-xl flex items-center justify-center hover:opacity-80"
            >
              <FaSearch color="#fff" size={25} />
              <span className="text-white ml-1 font-semibold md:hidden">
                Chercher
              </span>
            </button>
          </div>
        </form>
      </div>
      {/* END SERACH BAR */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {providers &&
          providers.map((pr) => (
            <ProviderCard
              key={pr.provider_id}
              id={pr.provider_id}
              image={images[Math.floor(Math.random() * 5)]}
              fullname={`${pr.first_name} ${pr.last_name}`}
              bio={pr.bio}
              city={pr.city}
              profession={pr.profession}
              rate={pr.stars}
            />
          ))}
      </div>
    </div>
  );
};

export default Vendors;
