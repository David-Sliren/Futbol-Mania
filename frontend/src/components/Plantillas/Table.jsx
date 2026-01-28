import { motion } from "motion/react";

function Table({ children }) {
  return (
    <motion.table
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: children ? 1 : 0,
        y: children ? 0 : 100,
      }}
      className="table-base w-full shadow-md rounded-xl overflow-hidden"
    >
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
    </motion.table>
  );
}

export default Table;
