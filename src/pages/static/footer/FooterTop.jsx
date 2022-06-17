import { Link } from "react-router-dom";

import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

import Logo from "../../../components/logo/Logo";

const FooterTop = () => {
  return (
    <div className="flex justify-center items-center lg:justify-between p-4 border-b border-gray-300">
      <div className="mr-12 hidden lg:block">
        <Logo />
      </div>
      <div className="flex justify-center">
        <Link aria-hidden={true} to="/" className="mr-6 text-gray-600">
          <FaFacebook size={22} />
        </Link>
        <Link aria-hidden={true} to="/" className="mr-6 text-gray-600">
          <BsInstagram size={22} />
        </Link>
        <Link aria-hidden={true} to="/" className="mr-6 text-gray-600">
          <FaLinkedinIn size={22} />
        </Link>
      </div>
    </div>
  );
};

export default FooterTop;
