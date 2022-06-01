import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import serviceService from "../../services/serviceService";

import image1 from "../../assets/archetect.jpg";
import Button from "../../components/Button";
import Loading from "../../components/hoc/Loading";

const Service = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [service, setService] = useState(null);
  const token = useSelector((state) => state.auth.user);
  const id = location.state.id;

  useEffect(() => {
    if (!id) navigate("/services");
    serviceService.getServiceById(id, token).then((res) => setService(res));
  }, [navigate, id, token]);
  if (!service) return <Loading />;
  return (
    <div className="relative bg-white max-w-7xl w-full mx-auto mt-4">
      <div
        className="h-48  md:wshadow bg-no-repeat bg-cover bg-center bg-fixed rounded-md"
        style={{ background: `url(${image1})` }}
      ></div>
      <div className="flex items-center justify-center h-48 absolute top-0 w-full z-10 bg-[rgba(0,0,0,.5)] rounded-md">
        <div className="text-white text-center">
          <h1 className="text-white font-segoeui text-3xl font-bold">
            {service?.title}
          </h1>
          <h2 className="text-xl py-1">
            Par: {`${service?.last_name} ${service?.first_name}`}
          </h2>
          <p className="text-lg">Prix: {service?.price} Dhs</p>
          <Button text="Fair une demande" classes="mt-1 bg-blue rounded-full" />
        </div>
      </div>
      {/* Description */}
      <div className="mt-4 bg-white md:wshadow px-4 py-5 mx-1 md:mx-0">
        <h2 className="font-bold text-darken text-xl">Description:</h2>
        <p className="mt-3 leading-6">{service?.description}</p>
      </div>
    </div>
  );
};

export default Service;
