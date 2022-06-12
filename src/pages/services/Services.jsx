import serviceService from "../../services/serviceService";
import Loading from "../../components/hoc/Loading";
import { useEffect, useState } from "react";
import ServiceCard from "../../components/ServiceCard";
import PageTop from "../../components/PageTop";
import { FaSearch } from "react-icons/fa";

import image1 from "../../assets/archetect.jpg";
import image2 from "../../assets/dantist.jpeg";

const images = [image1, image2];

function Services() {
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterInputs, setFilterInputs] = useState({
    title: "",
    city: "",
  });

  const { title, city } = filterInputs;

  const onFilterChange = (e) => {
    setFilterInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSearchSubmit = (e) => {
    e.preventDefault();
    serviceService
      .searchServices(filterInputs)
      .then((res) => setServices(res.data));
  };

  useEffect(() => {
    serviceService.getAllServices().then((res) => setServices(res));
    serviceService.getServiceCategories().then((res) => setCategories(res));
  }, []);

  if (!services) return <Loading />;

  return (
    <div className="w-10/12 max-w-x mx-auto my-4">
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
                  placeholder="Titre ou mot clé"
                  type="text"
                  name="title"
                  value={title}
                  onChange={onFilterChange}
                />
              </div>
              <div className="flex-1 w-full">
                <input
                  className="input focus:w-96 focus:max-w-full md:focus:w-full transition-all"
                  placeholder="Safi, Casablanca, Ouarzazat..."
                  type="text"
                  name="city"
                  value={city}
                  onChange={onFilterChange}
                />
              </div>
              <div className="flex-1">
                <select
                  className="input"
                  name="category"
                  onChange={onFilterChange}
                >
                  <option value="" className="text-gray-400">
                    Catégorie
                  </option>
                  {categories.map((cat) => (
                    <option key={`${cat.cat_id}cat4524`} value={cat.cat_id}>
                      {cat.name}
                    </option>
                  ))}
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
        {services.map((srv) => (
          <ServiceCard
            key={srv.service_id}
            id={srv.service_id}
            price={`${srv.price} Dhs`}
            title={srv.title}
            image={images[Math.floor(Math.random() * 2)]}
            desc={srv.description}
            city={srv.city}
            buttonText="Voir plus"
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
