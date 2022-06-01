import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Rating from "./chunks/Rating";

const Card = ({ id, image, price, rating, title, desc, city, buttonText }) => {
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
            <h3 className="font-bold text-xl text-blue max-w-[90ch] text-ellipsis overflow-hidden whitespace-nowrap">
              {price}
            </h3>
            {rating && <Rating stars={rating} />}
          </div>
          {title && (
            <h3 className="text-2xl mt-2 max-w-[90ch] text-ellipsis overflow-hidden whitespace-nowrap">
              {title}
            </h3>
          )}
        </div>
        {/* body body */}
        <div className="my-2 h-10">
          <p className="line-clamp-2 text-sm">{desc}</p>
        </div>
        <div className="flex justify-between">
          <Link
            state={{ id: id }}
            to="/vendor"
            className="btn inline-block py-2 px-3 text-sm font-semibold text-white bg-darken rounded-full mt-2 opacity-90 hover:opacity-100 transition-opacity"
          >
            {buttonText}
          </Link>
          <div className="flex items-end mt-3">
            <IoLocationSharp size={20} color="rgb(102 ,102 ,102)" />
            <p className="text-grayish text-sm translate-y-1">{city}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
