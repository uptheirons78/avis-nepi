import React from "react";
import moment from "moment";
import "moment/locale/it";

const Table = ({ donations }) => {
  return (
    <table className="table-auto mt-15 shadow-2xl">
      <thead className="bg-red-600 text-white">
        <tr>
          <th className="text-left px-4 py-3 text-base">Giorno</th>
          <th className="text-left px-4 py-3 text-base">Data</th>
          <th className="text-left px-4 py-3 text-base">Tipologia</th>
        </tr>
      </thead>
      <tbody className="text-gray-600 sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
        {donations.map(donation => (
          <tr key={donation.node.data}>
            <td className="text-xs md:text-base border px-4 py-2 capitalize">
              {moment(donation.node.data).format("dddd")}
            </td>
            <td className="text-xs md:text-base border px-4 py-2 capitalize">
              {moment(donation.node.data).format("DD MMM YYYY")}
            </td>
            <td className="text-xs md:text-base border px-4 py-2 capitalize">
              {donation.node.tipo}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
