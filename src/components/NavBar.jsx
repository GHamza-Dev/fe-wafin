import { NavDropDown } from "./NavDropDown";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BiUserCircle } from "react-icons/bi";
import { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { GrClose } from "react-icons/gr";
import Logo from "./logo/Logo";

export function NavBar() {
  const { user } = useSelector((state) => state.auth);
  const [dropDownHidden, setDropDown] = useState(true);
  const [navBarHidden, setNavBar] = useState(true);

  const toggleDropDownMenu = () => {
    setDropDown((prevState) => !prevState);
  };

  const toggleNavBar = () => {
    setNavBar((prevState) => !prevState);
    setDropDown(() => true);
  };

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 shadow-md shadow-gray-50 border-b border-b-slate-100">
      <div className="flex flex-wrap justify-between items-center mx-auto">
        <div>
          <Logo />
        </div>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-1 ml-3 text-sm text-darken rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-slate-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={toggleNavBar}
        >
          <span className="sr-only">Open main menu</span>
          <CgMenuRightAlt
            className={`${!navBarHidden && "hidden"}`}
            size={35}
          />
          <GrClose className={`${navBarHidden && "hidden"}`} size={35} />
        </button>
        <div
          className={`w-full md:block md:w-auto ${navBarHidden && "hidden"}`}
        >
          <ul className="flex md:items-center flex-col mt-3 md:flex-row md:space-x-8 md:mt-0">
            <li className="text-center">
              <Link
                to="vendors"
                className="md:mx-4 text-grayish hover:text-darken block py-2 pr-4 pl-3 border-y border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Vondeur
              </Link>
            </li>
            <li className="text-center">
              <Link
                to="/"
                className="md:mx-4 text-grayish hover:text-darken block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Offers
              </Link>
            </li>
            <li className="text-center">
              <Link
                to="services"
                className="md:mx-4 text-grayish hover:text-darken block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </Link>
            </li>
            <li className="text-center">
              <Link
                to="/"
                className="md:mx-4 text-grayish hover:text-darken block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contactez-nous
              </Link>
            </li>
            {!user ? (
              <li className="text-center">
                <Link
                  to="/login"
                  className="md:mx-4 text-grayish hover:text-darken block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <button className="btn-primary">Se connecter</button>
                </Link>
              </li>
            ) : (
              <li className="relative order-first md:order-last">
                <span className="flex justify-center md:mx-4 py-2 pr-4 pl-3 border-t border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  <button
                    onClick={toggleDropDownMenu}
                    className="flex items-center btn tracking-wider text-blue bg-lighten border rounded-lg border-blue py-1 px-3"
                  >
                    Profile <BiUserCircle size={30} />
                  </button>
                </span>
                <NavDropDown hidden={dropDownHidden} userName={user?.name} />
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
