import { Link } from "react-router-dom";
import { CgArrowTopRightR, CgArrowBottomLeftR } from "react-icons/cg";
import { useState, useEffect } from "react";

function SubNav({ opened, onLinkClick }) {
  const [showSubNav, setShowSubNav] = useState(false);

  useEffect(() => {
    setShowSubNav(opened);
  }, [opened]);

  return (
    <div
      className={`${
        !showSubNav && "hidden"
      } z-10 absolute right-0 h idden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
    >
      <ul
        className="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownSmallButton"
      >
        <li className="border-b">
          <Link
            onClick={onLinkClick}
            to="provider-orders"
            className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <CgArrowBottomLeftR size={22} />
            <span className="font-medium truncate ml-1">Vendeur</span>
          </Link>
        </li>
        <li>
          <Link
            onClick={onLinkClick}
            to="client-orders"
            className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <CgArrowTopRightR size={22} />
            <span className="font-medium truncate ml-1">Client</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SubNav;
