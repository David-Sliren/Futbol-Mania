import { motion } from "motion/react";
import React from "react";

function ButtonLearnMore({ isMore, onAction }) {
  return (
    <motion.button
      whileTap={{
        scale: 0.9,
      }}
      className="bg-green-500 py-2 px-4 rounded-xl text-md text-black font-bold cursor-pointer translate-y-1"
      onClick={onAction}
    >
      {isMore ? "Leer menos" : "Leer más"}
    </motion.button>
  );
}

export default ButtonLearnMore;
