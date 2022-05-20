import { Routes, Link } from "react-router-dom";

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
          <li>
            <Link to="/register">
              <button className="btn-primary">Se connecter</button>
            </Link>
          </li>
          <li></li>
        </ul>
      </nav>
    </div>
  );
}
