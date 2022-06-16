import { BiTime, BiTask } from "react-icons/bi";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import { CgArrowRight } from "react-icons/cg";
import { BsStarHalf } from "react-icons/bs";

function ClientOrderCard({
  title,
  date,
  providerId,
  serviceId,
  acceptedAt,
  completedAt,
  rejectedAt,
  onComplete,
  rateId,
  onRate,
}) {
  let statusBg = "bg-gray-400";
  let statusText = "Waiting...";

  if (completedAt != null) {
    statusBg = "bg-blue";
    statusText = "Compléte";
  } else if (acceptedAt != null) {
    statusBg = "bg-green-500";
    statusText = "Accepté";
  } else if (rejectedAt != null) {
    statusBg = "bg-red-300";
    statusText = "Rejété";
  }

  return (
    <div className={`border border-gray-300 p-3 pb-0 relative rounded-sm`}>
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
          <span className={`w-5 h-5 rounded-full ${statusBg}`}></span>
          <span className="ml-1">{statusText}</span>
        </li>
      </ul>
      <hr />
      <div className="my-2 flex items-center justify-between">
        {completedAt === null && (
          <Button text="Complété" onClick={onComplete} />
        )}
        <Link
          className="flex items-center text-blue py-2"
          to="/vendor"
          state={{ id: providerId }}
        >
          <span>Vendeur</span> <CgArrowRight size={22} />
        </Link>
        {rateId ? (
          <button className="border rounded-full border-primary">
            <BsStarHalf size={24} color="orange" />
          </button>
        ) : (
          <button onClick={onRate} className="border rounded-full">
            <BsStarHalf color="gray" size={24} />
          </button>
        )}
      </div>
    </div>
  );
}

export default ClientOrderCard;
