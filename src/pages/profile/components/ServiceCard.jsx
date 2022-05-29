import { CgPlayListRemove } from "react-icons/cg";
import { BiEditAlt } from "react-icons/bi";
import { RiRadioButtonLine } from "react-icons/ri";

const ServiceCard = ({ image, price, text }) => {
  return (
    <div className="overflow-hidden shadow-md ring-gray-50  rounded-sm">
      {/* card image */}
      <div className="h-52">
        <img className="h-full w-full object-cover" src={image} alt="roma" />
      </div>
      {/*  card body */}
      <div className="p-4">
        <h3 className="font-bold text-2xl text-blue">{price} Dh</h3>
        <p className="my-1 line-clamp-3">{text}</p>
      </div>
      {/* card footer */}
      <div className="flex justify-between items-center px-4 py-2 bg-slate-100">
        <button className="text-green-400 text-sm flex flex-col items-center">
          <RiRadioButtonLine size={25} />
          <span>Active</span>
        </button>
        <button className="text-blue text-sm flex flex-col items-center">
          <BiEditAlt size={25} />
          <span>Edit</span>
        </button>
        <button className="text-red-400 text-sm flex flex-col items-center">
          <CgPlayListRemove size={25} />
          <span>Supprimer</span>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
