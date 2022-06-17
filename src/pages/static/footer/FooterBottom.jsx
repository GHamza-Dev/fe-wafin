import { Link } from "react-router-dom";

const FooterBottom = () => {
  return (
    <div className="tracking-wider text-center text-lighten px-6 py-5 bg-darken">
      <span>&copy; {new Date().getFullYear()} Copyright: </span>
      <Link to="/" className="font-semibold">
        WARYA - waFin
      </Link>
    </div>
  );
};

export default FooterBottom;
