import { Link } from "react-router-dom";
import FooterBottom from "./FooterBottom";
import { BsTelephoneFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

import FooterTop from "./FooterTop";

const Footer = () => {
  return (
    <footer className="text-center lg:text-left bg-gray-100 text-gray-600">
      <FooterTop />
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h6 className="uppercase font-semibold mb-4 flex items-center justify-center md:justify-start">
              Qui nous sommes?
            </h6>
            <p>
              Nous aidons les particuliers et les entreprises à partager leurs
              services ou simplement à avoir une présence en ligne.
            </p>
          </div>
          <div>
            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Nos produits
            </h6>
            <ul>
              <li className="mb-2">
                <Link to="/" className="text-gray-600">
                  waFin
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-gray-600">
                  myTeacher
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Liens utiles
            </h6>
            <ul>
              <li className="mb-2">
                <Link to="/" className="text-gray-600">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-gray-600">
                  Vendeurs
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-gray-600">
                  Offers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Nous contacter
            </h6>
            <ul>
              <li className="flex items-center justify-center md:justify-start mb-4">
                <AiFillHome aria-hidden={true} size={19} />
                <span className="ml-1">Safi - Maroc</span>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-4">
                <MdEmail aria-hidden={true} size={19} />
                <span className="ml-1">info@wafin.com</span>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-4">
                <BsTelephoneFill aria-hidden={true} size={19} />
                <span className="ml-1">+ 00 11 22 33 44</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;
