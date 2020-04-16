import React from "react";
import { Link } from "gatsby";
import {
  FaHeartbeat,
  FaFileMedicalAlt,
  FaHeart,
  FaFileContract,
} from "react-icons/fa";

const Features = () => {
  return (
    <div id="donare" className="bg-gray-50 overflow-hidden">
      <div className="relative max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="svg-pattern-squares-1"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#svg-pattern-squares-1)" />
        </svg>

        <div className="relative lg:grid lg:grid-cols-3 lg:col-gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Donare il sangue è un
              <span className="text-avis-blue"> atto d'amore.</span>
            </h3>
            <div className="mt-5">
              <Link
                to="/blog/10-cose-importanti-sulle-donazioni"
                className="bg-red-700 text-white py-2 px-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-avis-blue"
              >
                10 Cose importanti sulla donazione
              </Link>
            </div>
          </div>
          <div className="mt-10 sm:grid sm:grid-cols-2 sm:col-gap-8 sm:row-gap-10 lg:col-span-2 lg:mt-0">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-avis-blue text-white">
                <FaHeartbeat className="h-7 w-7" />
              </div>
              <div className="mt-5">
                <h5 className="text-lg leading-6 font-medium text-gray-900">
                  Importante per il paese
                </h5>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Grazie ai donatori di Nepi, tutti i residenti nel nostro
                  Comune, sono coperti per un'eventuale richiesta di sangue.
                </p>
              </div>
            </div>
            <div className="mt-10 sm:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-avis-blue text-white">
                <FaFileContract className="h-7 w-7" />
              </div>
              <div className="mt-5">
                <h5 className="text-lg leading-6 font-medium text-gray-900">
                  Anonimo e riservato
                </h5>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  La donazione é anonima e gratuita, come l’assistenza di sangue
                  stessa.
                </p>
              </div>
            </div>
            <div className="mt-10 sm:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-avis-blue text-white">
                <FaFileMedicalAlt className="h-7 w-7" />
              </div>
              <div className="mt-5">
                <h5 className="text-lg leading-6 font-medium text-gray-900">
                  A tutela del lavoratore
                </h5>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Ai donatori lavoratori é riconosciuto per legge il giorno di
                  riposo con rilascio del certificato medico nella sede stessa
                  dell’Avis.
                </p>
              </div>
            </div>
            <div className="mt-10 sm:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-avis-blue text-white">
                <FaHeart className="h-7 w-7" />
              </div>
              <div className="mt-5">
                <h5 className="text-lg leading-6 font-medium text-gray-900">
                  Essenziale per il prossimo
                </h5>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Tutti i cittadini di Nepi sono invitati a donare, perché ogni
                  donazione può salvare una vita.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
