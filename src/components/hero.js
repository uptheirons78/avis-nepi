import React, { useState } from "react";
import { Link } from "gatsby";
import moment from "moment";
import "moment/locale/it";
import Logo from "../images/logo.png";
import HeroImage from "../images/hero.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = ({ nextDonation }) => {
  const [navigation, setNavigation] = useState(false);
  const handleNavigation = () => setNavigation(!navigation);

  const navClass = navigation
    ? "opacity-100 scale-100 transition duration-100 ease-in"
    : "opacity-0 scale-95 transition duration-150 ease-out";

  const pages = [
    { name: "Calendario Donazioni", slug: "#calendario" },
    { name: "Blog", slug: "#blog" },
    { name: "Contatti", slug: "#contatti" },
  ];

  const prossimaDonazione = moment(nextDonation).format("dddd DD MMMM YYYY");

  return (
    <div id="top" className="relative bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto ">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <div className="pt-6 px-4 sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <Link to="/">
                    <img
                      className="h-8 w-auto sm:h-10"
                      src={Logo}
                      alt="Logo dell'Avis Nepi."
                    />
                  </Link>
                  <div className="-mr-2 flex items-center md:hidden">
                    <button
                      onClick={handleNavigation}
                      type="button"
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    >
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* Desktop Navigation */}
              <div className="hidden md:block md:ml-10 md:pr-4">
                {pages.map(page => {
                  return (
                    <AnchorLink
                      key={`desktop__${page.name}`}
                      href={page.slug}
                      className="px-3 font-medium text-gray-500 hover:text-avis-blue focus:outline-none focus:text-avis-blue transition duration-150 ease-in-out"
                    >
                      {page.name}
                    </AnchorLink>
                  );
                })}
              </div>
            </nav>
          </div>

          <div
            className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden ${navClass}`}
          >
            <div className="rounded-lg shadow-md">
              <div className="rounded-lg bg-white shadow-xs overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src={Logo}
                      alt="Logo dell'Avis di Nepi."
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      onClick={handleNavigation}
                      type="button"
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    >
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                {/* Mobile Menu */}
                <div className="px-2 pt-2 pb-3">
                  {pages.map(page => {
                    return (
                      <AnchorLink
                        key={`mobile__${page.name}`}
                        href={page.slug}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-avis-blue hover:bg-gray-50 focus:outline-none focus:text-avis-blue focus:bg-gray-50 transition duration-150 ease-in-out"
                      >
                        {page.name}
                      </AnchorLink>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                Dai il meglio di te stesso
                <br className="xl:hidden" />
                <span className="text-avis-blue"> diventa donatore</span>
              </h2>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                L’Avis Comunale di Nepi odv, Sez. Mirella Falchi, fondata nel
                1981, in collaborazione con la Consulta Giovani Donatori Vi
                invita a visitare questo sito dove potrete trovare notizie ed
                aggiornamenti riguardo la nostra sezione.
              </p>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Prossima donazione:{" "}
                <span className="text-avis-blue font-bold">
                  {prossimaDonazione}
                </span>
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <AnchorLink
                    href="#donare"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-avis-blue hover:bg-blue-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Perché donare?
                  </AnchorLink>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/blog/cosa-e-lavis"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-700 bg-blue-100 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Cosa è l'AVIS
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-screen"
          src={HeroImage}
          alt="Monumento Avis Comunale di Nepi odv."
        />
      </div>
    </div>
  );
};

export default Hero;
