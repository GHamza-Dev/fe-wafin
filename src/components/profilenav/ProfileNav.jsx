import { RiServiceLine } from "react-icons/ri";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { RiUserSettingsLine } from "react-icons/ri";
import { CgArrowBottomLeftR } from "react-icons/cg";
import SubNav from "./SubNav";

import To from "../Link";
import { useState } from "react";

function ProfileNav() {
  const size = 26;

  const [subNavOpened, setSubNavOpened] = useState(false);

  return (
    <nav className="md:h-screen">
      <ul className="flex justify-between border px-3 md:flex-col md:h-screen md:justify-start md:border-0 md:bg-white md:w-36">
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
        <li className="md:mt-7 relative">
          <button
            onClick={() => {
              setSubNavOpened((state) => !subNavOpened);
            }}
            className="flex flex-col p-1 items-center justify-evenly h-16 hover:bg-slate-100"
          >
            <span>
              <CgArrowBottomLeftR size={size} />
            </span>
            <p className="text-sm">Mes demands</p>
          </button>
          <div className="absolute  right-0 translate-x-8">
            <SubNav
              opened={subNavOpened}
              onLinkClick={() => {
                setSubNavOpened(false);
              }}
            />
          </div>
        </li>
        <li className="md:mt-7">
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
        <li className="md:mt-7">
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
