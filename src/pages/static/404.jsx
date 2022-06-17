import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex items-center h-screen p-16 text-gray-900 bg-gray-100 overflow-hidden">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-gray-600 skew-x-12 animate-pulse">
            <span className="sr-only">Erreur</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Désolé, nous n'avons pas trouvé cette page.
          </p>
          <p className="mt-4 mb-8 text-gray-400">
            Mais ne vous inquiétez pas, vous pouvez trouver beaucoup d'autres
            choses sur notre page d'accueil.
          </p>
          <Link
            to="/"
            rel="noopener noreferrer"
            className="btn-primary skew-x-12 inline-block"
          >
            Retour à la page d'accueil
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
