import React from "react";
import Table from "./table";
import { requisiti } from "../utils/requisiti";

const Donations = ({ donations }) => {
  const today = new Date();
  const nextDonations = donations
    .filter(donation => {
      return new Date(donation.node.data) >= today;
    })
    .slice(0, 7);
  return (
    <div
      id="calendario"
      className="flex flex-col-reverse lg:flex-row flex-wrap my-5"
    >
      <div className="w-full lg:w-1/2 px-15 flex flex-col sm:align-center sm:justify-center">
        <Table donations={nextDonations} />
        <div className="mt-7">
          <p className="text-center text-gray-500">
            L’intervallo minimo tra una donazione di sangue intero e l’altra è
            di 90 giorni. La frequenza annua delle donazioni non deve essere
            superiore a 4 volte l’anno per gli uomini e 2 volte l’anno per le
            donne.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 px-5 lg:px-15">
        <h3 className="mt-5 lg:mt-15 mb-3 lg:mb-5 lg:mr-5 text-3xl leading-9 font-extrabold tracking-tight text-left lg:text-right text-gray-900 sm:text-4xl sm:leading-10">
          Controlla il calendario delle prossime{" "}
          <span className="text-avis-blue">donazioni</span> ed i{" "}
          <span className="text-avis-blue">requisiti minimi</span> per poter
          donare il sangue.
        </h3>
        <ul className="px-0 lg:px-5 mt-10 lg:mt-0 text-left lg:text-right">
          {requisiti.map(requisito => {
            return (
              <li key={requisito.tipo} className="text-base text-gray-500 my-1">
                <span className="text-base text-avis-blue">
                  {requisito.tipo}
                </span>
                : {requisito.spiegazione}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Donations;
