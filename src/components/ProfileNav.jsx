import { RiServiceLine } from "react-icons/ri";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { RiUserSettingsLine } from "react-icons/ri";
import { CgArrowBottomLeftR } from "react-icons/cg";

import To from "./Link";

function ProfileNav() {
  const size = 26;
  return (
    <nav>
      <ul className="flex justify-between border px-3">
        <li>
          <To
            to="prvservices"
            className="flex flex-col p-1 items-center justify-evenly h-16 hover:bg-slate-100"
            current="text-blue"
          >
            <span>
              <RiServiceLine size={size} />
            </span>
            <p className="text-sm">Mes services</p>
          </To>
        </li>
        <li>
          <To
            to="orders"
            className="flex flex-col p-1 items-center justify-evenly h-16 hover:bg-slate-100"
            current="text-blue"
          >
            <span>
              <CgArrowBottomLeftR size={size} />
            </span>
            <p className="text-sm">Mes demands</p>
          </To>
        </li>
        <li>
          <To
            to="add-service"
            className="flex flex-col p-1 items-center justify-evenly h-16 hover:bg-slate-100"
            current="text-blue"
          >
            <span>
              <AiOutlineAppstoreAdd size={size} />
            </span>
            <p className="text-sm text-center">Déposer</p>
          </To>
        </li>
        <li>
          <To
            to="update"
            className="flex flex-col p-1 items-center justify-evenly h-16 hover:bg-slate-100"
            current="text-blue"
          >
            <span>
              <RiUserSettingsLine size={size} />
            </span>
            <p className="text-sm">Profile</p>
          </To>
        </li>
      </ul>
    </nav>
  );
}

export default ProfileNav;
