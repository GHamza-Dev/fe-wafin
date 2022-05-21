import { NavDropDown } from "./NavDropDown";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BiUserCircle } from "react-icons/bi";
import { useState } from "react";

export function NavBar() {
  const { user } = useSelector((state) => state.auth);
  const [dropDownHidden, setDropDown] = useState(true);

  const toggleDropDownMenu = () => {
    setDropDown((prevState) => !prevState);
  };

  return (
    <div className="bg-white flex justify-between items-center shadow-sm h-14 px-7 mx-auto">
      <div className="">
        <h1 className="font-bold text-2xl">
          <span className="text-darken">wa</span>
          <span className="text-primary">Fin</span>
        </h1>
      </div>
      <nav>
        <ul className="flex justify-center items-center">
          <li>
            <Link
              to="/"
              className="mx-4 text-grayish hover:text-darken hover:cursor-pointer"
            >
              Vondeur
            </Link>
          </li>
          <li>
            <a className="mx-4 text-grayish hover:text-darken hover:cursor-pointer">
              Offer
            </a>
          </li>
          <li>
            <a className="mx-4 text-grayish hover:text-darken hover:cursor-pointer">
              Service
            </a>
          </li>
          <li>
            <a className="mx-4 text-grayish hover:text-darken hover:cursor-pointer">
              Contactez-nous
            </a>
          </li>
          {!user ? (
            <li>
              <Link to="/register">
                <button className="btn-primary">Se connecter</button>
              </Link>
            </li>
          ) : (
            <li className="relative">
              <button
                onClick={toggleDropDownMenu}
                className="flex items-center btn tracking-wider text-blue bg-lighten border rounded-lg border-blue py-1 px-3"
              >
                Profile <BiUserCircle size={30} />
              </button>
              <NavDropDown hidden={dropDownHidden} userName={user?.name} />
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
