import { FaUserCog } from "react-icons/fa";
import { MdSell } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { logout } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function NavDropDown({ userName, hidden }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <div
      className={`${
        hidden && "hidden"
      } z-10 absolute right-0 h idden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
    >
      <Link
        to="/profile"
        className="flex items-center just px-4 py-3 text-sm text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <FaUserCog size={22} />
        <div className="font-medium truncate ml-1">{userName}</div>
      </Link>
      <ul
        className="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownSmallButton"
      >
        <li>
          <a className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            <MdSell size={22} />
            <span className="truncate ml-1">Compte vendeur</span>
          </a>
        </li>
        <li>
          <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            Mes services
          </a>
        </li>
        <li>
          <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            Novaux service
          </a>
        </li>
      </ul>
      <div className="py-1">
        <button
          onClick={logOut}
          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
        >
          <IoLogOut size={22} />
          <span className="ml-1">Se déconnecter</span>
        </button>
      </div>
    </div>
  );
}
