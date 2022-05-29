import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import image from "../../assets/side-image.jpg";
import { getUsersServices } from "../../features/serviceSlice";
import ServiceCard from "./components/ServiceCard";

const Services = () => {
  const dispatch = useDispatch();
  const { services } = useSelector((state) => state.service);

  useEffect(() => {
    dispatch(getUsersServices());
  }, [dispatch]);

  const servicesList = services.map((service) => (
    <ServiceCard
      key={service.service_id}
      image={image}
      price={service.price}
      text={service.description}
    />
  ));

  return (
    <div className="w-10/12 max-w-x mx-auto my-4">
      <h2 className="my-7 font-bold text-darken text-2xl">Mes Services</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {servicesList}
      </div>
    </div>
  );
};

export default Services;
