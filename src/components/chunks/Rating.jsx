import { AiFillStar } from "react-icons/ai";

function Rating({ stars, layout, text }) {
  return (
    <span className={`flex items-center ${layout}`}>
      <AiFillStar color="orange" size={27} />
      <span className={`text-lg text-grayish ${text}`}>
        {stars.toFixed(1)}/5
      </span>
    </span>
  );
}

export default Rating;
