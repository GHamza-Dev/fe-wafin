import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Rating from "../../../components/chunks/Rating";

const ProviderCard = ({ id, image, fullname, profession, bio, city }) => {
  return (
    <div className="overflow-hidden wshadow rounded-md">
      {/* card image */}
      <div className="h-52">
        <img className="h-full w-full object-cover" src={image} alt="roma" />
      </div>
      {/*  card body */}
      <div className="p-4">
        {/* body top */}
        <div>
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-xl text-darken max-w-[90ch] text-ellipsis overflow-hidden whitespace-nowrap">
              {fullname}
            </h3>
            <Rating stars={4} />
          </div>
          <h3 className="font-light text-grayish">{profession}</h3>
        </div>
        {/* body body */}
        <div className="my-2">
          <p className="line-clamp-2 text-sm">{bio}</p>
        </div>
        <div className="flex justify-between">
          <Link
            state={{ id: id }}
            to="/vendor"
            className="btn inline-block py-2 px-3 text-sm font-semibold text-white bg-blue rounded-full mt-2 opacity-90 hover:opacity-100 transition-opacity"
          >
            Voir profil
          </Link>
          <div className="flex items-end mt-3">
            <IoLocationSharp size={20} color="rgb(55,65,81)" />
            <p className="text-black text-sm">{city}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderCard;
