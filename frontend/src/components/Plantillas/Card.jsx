import { motion } from "motion/react";
import { Link } from "react-router";
import { useGetBotonData } from "../../context/boton_data/useGetBotonData";

function Card({ id = "", name = "liga", logo = "img", isActive = false }) {
  const { getData } = useGetBotonData();

  return (
    <Link id={id} to={"/clasificacion"}>
      <motion.button
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 15,
        }}
        className="w-full h-28 bg-black/20 gap-1 text-[1em] text-white rounded-2xl border-2 border-black py-2 px-1.5 flex flex-col justify-center items-center backdrop-blur-3xl cursor-pointer group shadow-md shadow-zinc-800 overflow-hidden"
        onClick={isActive ? () => getData(id) : ""}
      >
        <span className="group-hover:animate-pulse  h-full overflow-hidden pointer-events-none">
          <img
            className="  w-full h-full object-cover"
            src={logo}
            alt={`Logo de ${name}`}
          />
        </span>
        <span className=" pointer-events-none">
          <p className="text-[1.2em] text-center font-semibold">
            {name.length > 15 ? name.slice(0, 20) + "..." : name}
          </p>
        </span>
      </motion.button>
    </Link>
  );
}

export default Card;
