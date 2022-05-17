import React from "react";
export function NavBar() {
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
            <a className="mx-4 text-grayish hover:text-darken hover:cursor-pointer">
              Vondeur
            </a>
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
          <li>
            <button className="btn-primary">Se connecter</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
