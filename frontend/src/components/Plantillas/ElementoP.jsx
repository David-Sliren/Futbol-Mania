import { motion } from "motion/react";

function ElementoP({ children, title }) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className=" w-full min-h-dvh p-4 flex flex-col gap-12"
    >
      <div className=" h-fit self-center  overflow-hidden">
        {title && (
          <h1 className="text-6xl sm:text-8xl 2xl:text-9xl font-bold text-shadow-[0_0_8px] text-white text-shadow-black mt-6">
            {title}
          </h1>
        )}
      </div>
      {children}
    </motion.section>
  );
}

export default ElementoP;
