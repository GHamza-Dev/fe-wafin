import { Link } from "react-router-dom";
import { RiServiceLine } from "react-icons/ri";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { RiUserSettingsLine } from "react-icons/ri";

function ProfileNav() {
  const size = 26;
  return (
    <nav>
      <ul className="flex justify-between border px-3">
        <li>
          <Link
            to="/"
            className="flex flex-col p-1 items-center justify-evenly h-16 hover:bg-slate-100"
          >
            <span>
              <RiServiceLine size={size} />
            </span>
            <p className="text-sm">Mes services</p>
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="flex flex-col p-1 items-center justify-evenly h-16 hover:bg-slate-100"
          >
            <span>
              <AiOutlineAppstoreAdd size={size} />
            </span>
            <p className="text-sm text-center">Déposer</p>
          </Link>
        </li>
        <li>
          <Link
            to="update"
            className="flex flex-col p-1 items-center justify-evenly h-16 hover:bg-slate-100"
          >
            <span>
              <RiUserSettingsLine size={size} />
            </span>
            <p className="text-sm">Profile</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default ProfileNav;
