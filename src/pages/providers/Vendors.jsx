import ProviderCard from "./components/ProviderCard";
import Loading from "../../components/hoc/Loading";

import image1 from "../../assets/provider1.jpg";
import image2 from "../../assets/provider2.jpg";
import image3 from "../../assets/provider3.jpg";
import image4 from "../../assets/provider4.jpg";
import image5 from "../../assets/provider5.jpg";

import { useSelector, useDispatch } from "react-redux";
import { getAllProviders, reset } from "../../features/userSlice";
import toast from "react-hot-toast";
import { useEffect } from "react";

const images = [image1, image2, image3, image4, image5];

const Vendors = () => {
  const dispatch = useDispatch();

  const { providers, isLoading, isError, message } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(getAllProviders());

    if (message) {
      if (isError) toast.error(message);
      else toast.success(message);
    }

    dispatch(reset());
  }, [dispatch, isError, message]);

  return (
    <div className="w-10/12 max-w-x mx-auto my-4">
      {isLoading && <Loading />}
      <h2 className="my-7 font-bold text-darken text-2xl">Vendeurs</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {providers.map((pr) => (
          <ProviderCard
            key={pr.provider_id}
            id={pr.provider_id}
            image={images[Math.floor(Math.random() * 5)]}
            fullname={`${pr.first_name} ${pr.last_name}`}
            bio={pr.bio}
            city={pr.city}
            profession={pr.profession}
          />
        ))}
      </div>
    </div>
  );
};

export default Vendors;
