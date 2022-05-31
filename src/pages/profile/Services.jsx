import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import image from "../../assets/side-image.jpg";
import Model from "../../components/hoc/Model";
import { getUsersServices, removeService } from "../../features/serviceSlice";
import ServiceCard from "./components/ServiceCard";
import Loading from "../../components/Loading";
import toast from "react-hot-toast";
import { reset } from "../../features/serviceSlice";

const Services = () => {
  const dispatch = useDispatch();
  const { services, isLoading, isError, message } = useSelector(
    (state) => state.service
  );

  const [opened, setOpened] = useState(false);
  const [serviceId, setServiceId] = useState(0);

  const deleteHandler = async () => {
    await dispatch(removeService(serviceId));
    dispatch(getUsersServices());
  };

  useEffect(() => {
    dispatch(getUsersServices());

    if (message) {
      if (isError) toast.error(message);
      else toast.success(message);
    }

    dispatch(reset());
  }, [dispatch, isError, message]);

  const servicesList = services.map((service) => (
    <ServiceCard
      key={service.service_id}
      image={image}
      price={service.price}
      text={service.title}
      onDeleteAttempt={() => {
        setOpened(true);
        setServiceId(service.service_id);
      }}
    />
  ));
  return (
    <div className="w-10/12 max-w-x mx-auto my-4">
      {isLoading && <Loading />}
      <Model
        opened={opened}
        title="Supprimer le service"
        status="danger"
        text="Voulez-vous vraiment supprimer votre service ?"
        onConfirm={deleteHandler}
        onCancel={() => {
          setOpened(false);
        }}
      />
      <h2 className="my-7 font-bold text-darken text-2xl">Mes Services</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {servicesList}
      </div>
    </div>
  );
};

export default Services;
