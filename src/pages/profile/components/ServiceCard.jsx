const ServiceCard = ({ image, price, text }) => {
  return (
    <div className="overflow-hidden shadow-md ring-gray-50 ring-2 rounded-sm">
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
      <div className="flex justify-between p-4">
        <p className="text-green-400">Active</p>
        <p className="text-blue">Edit</p>
        <p className="text-red-400">Suppremer</p>
      </div>
    </div>
  );
};

export default ServiceCard;
