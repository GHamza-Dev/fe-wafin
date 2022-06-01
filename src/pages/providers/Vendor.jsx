import { IoLocationSharp } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import image5 from "../../assets/provider5.jpg";
import Rating from "../../components/chunks/Rating";

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import userService from "../../services/userService";
import { useSelector } from "react-redux";
import Loading from "../../components/hoc/Loading";

const Vendor = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [provider, setProvider] = useState(null);

  const token = useSelector((state) => state.auth.user);
  const id = location.state.id;

  useEffect(() => {
    if (!id) navigate("/vendors");
    userService.getProvider({ id }, token).then((res) => setProvider(res));
  }, [navigate, id, token]);

  if (!provider) return <Loading />;

  return (
    <div className="lg:mt-11">
      {!provider && <Loading />}
      <div className="md:bg-white max-w-7xl w-full bg-slate-100 relative md:flex h-48 container mx-auto rounded-md md:wshadow">
        <div className="absolute md:static left-1/2 -translate-x-1/2 md:-translate-x-0 top-1/2 md:flex justify-between md:grow md:px-4 w-full">
          <div className="flex flex-col md:flex-row items-center">
            <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-l-primary border-b-primary">
              <img
                className="w-full object-cover"
                src={image5}
                alt="abdellah"
              />
              <Rating
                layout="absolute bg-[rgba(0,0,0,.3)] left-1/2 bottom-1 -translate-x-1/2 rounded-md"
                text="text-white"
                stars={4}
              />
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h2 className="font-semibold text-3xl text-darken mt-2 md:ml-2">
                {`${provider?.last_name} ${provider?.first_name}`}
              </h2>
              <p className="mt-1 md:my-2 md:ml-3">{provider?.profession}</p>
              <div className="flex items-center mt-1 text-grayish">
                <span aria-label="hidden">
                  <IoLocationSharp size={27} color="rgb(102,102,102)" />
                </span>
                <p>{provider?.city}</p>
              </div>
            </div>
          </div>
          {/* contact */}
          <div className="mt-3 flex justify-center">
            <div className="md:flex md:flex-col">
              <a
                href={`tel:${provider.phone}`}
                className="btn font-normal bg-green-700 rounded-md inline-flex py-3 mr-1 md:m-0 w-32"
              >
                <span className="mr-2" aria-label="hidden">
                  <IoMdCall size={25} />
                </span>
                <span>Appeler</span>
              </a>
              <a
                href={`mailto:${provider.email}`}
                className="btn font-normal bg-blue rounded-md inline-flex py-3 ml-1 md:ml-0 md:mt-2 w-32"
              >
                <span className="mr-2" aria-label="hidden">
                  <MdEmail size={25} />
                </span>
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* bio */}
      <div className="max-w-7xl w-full mx-auto mt-4 bg-slate-100 relative translate-y-64 md:bg-white md:wshadow md:translate-y-0  px-4 py-5">
        <h2 className="font-bold text-darken text-xl">Bio:</h2>
        <p className="mt-3 leading-6">{provider.bio}</p>
      </div>
    </div>
  );
};

export default Vendor;
