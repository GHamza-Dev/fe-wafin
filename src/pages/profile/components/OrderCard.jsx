import { BiTime, BiTask } from "react-icons/bi";
import { BsArrowLeftCircle, BsTelephoneFill } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";

function OrderCard({
  title,
  date,
  name,
  phone,
  email,
  serviceId,
  acceptedAt,
  completedAt,
  rejectedAt,
  onAccept,
  onReject,
}) {
  let actions = null;
  let cardBg = "bg-white";
  if (completedAt) {
    actions = <p className="text-sky-500">Completed at: {acceptedAt}</p>;
    cardBg = "bg-sky-100";
  } else if (acceptedAt != null) {
    actions = <p className="text-green-500">Accepted at: {acceptedAt}</p>;
    cardBg = "bg-green-100";
  } else if (rejectedAt != null) {
    actions = <p className="text-red-300">Rejected at: {rejectedAt}</p>;
    cardBg = "bg-gray-100";
  } else {
    actions = (
      <>
        <Button text="Accepter" onClick={onAccept} />
        <Button
          text="Rejeter"
          onClick={onReject}
          classes="bg-red-600 ml-2 hover:bg-red-500"
        />
      </>
    );
  }

  return (
    <div className={`border border-gray-300 p-3 relative rounded-sm ${cardBg}`}>
      <div className="absolute top-1/2 -translate-y-1/2 cursor-pointer transition-transform hover:rotate-180 -right-3 bg-white rounded-full">
        <Link to="/service" state={{ id: serviceId }}>
          <BsArrowLeftCircle color="rgb(209 ,213 ,219)" size={30} />
        </Link>
      </div>
      <h2 className="flex items-center">
        <BiTask color="orange" size={26} />
        <Link to="/service" state={{ id: serviceId }}>
          <span className="text-xl ml-1 text-darken hover:underline">
            {title}
          </span>
        </Link>
      </h2>
      <ul>
        <li className="flex items-center my-2">
          <BiTime color="#030050" size={21} />
          <span className="ml-1">{date}</span>
        </li>
        <li className="flex items-center my-2">
          <IoPerson color="#030050" size={21} />
          <span className="ml-1">{name}</span>
        </li>
        <li className="flex items-center my-2">
          <BsTelephoneFill color="#030050" size={21} />
          <span className="ml-1">{phone}</span>
        </li>
        <li className="flex items-center my-2">
          <MdEmail color="#030050" size={21} />
          <span className="ml-1 text-blue">{email}</span>
        </li>
      </ul>
      <hr />
      <div className="mt-3 flex items-center">{actions}</div>
    </div>
  );
}

export default OrderCard;
