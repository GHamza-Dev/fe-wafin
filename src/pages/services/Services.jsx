import serviceService from "../../services/serviceService";
import Loading from "../../components/hoc/Loading";
import { useEffect, useState } from "react";
import ServiceCard from "../../components/ServiceCard";

import image1 from "../../assets/archetect.jpg";
import image2 from "../../assets/dantist.jpeg";

const images = [image1, image2];

function Services() {
  const [services, setServices] = useState(null);

  useEffect(() => {
    serviceService.getAllServices().then((res) => setServices(res));
  }, []);

  if (!services) return <Loading />;

  return (
    <div className="w-10/12 max-w-x mx-auto my-4">
      <h2 className="my-7 font-bold text-darken text-2xl">Vendeurs</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
