import React from "motion/react";

function Table({ children }) {
  return (
    <table className=" table-base w-full shadow-md rounded-xl overflow-hidden">
      <thead>
        <tr>
          <th>Po</th>
          <th>Cub</th>
          <th>PJ</th>
          <th>G</th>
          <th>E</th>
          <th>P</th>
          <th>GF</th>
          <th>GC</th>
          <th>DG</th>
          <th>Pts</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}

export default Table;
