import { motion } from "motion/react";
import Card from "./Card";
import ButtonLearnMore from "./ButtonLearnMore";

function ElementoLP({
  nombre = "",
  children,
  scroll = false,
  classNames = "xl:grid-cols-5",
  learnMore = false,
  isMore,
  on,
}) {
  return (
    <article className={`relative w-full p-2 flex flex-col gap-6`}>
      <div className="inline-flex gap-4 p-2">
        <motion.h2
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            ease: "easeOut",
            duration: 0.4,
          }}
          className="text-3xl text-center font-semibold text-white text-shadow-md text-shadow-zinc-800 sm:text-left md:text-4xl"
        >
          {nombre}
        </motion.h2>
        {learnMore && <ButtonLearnMore isMore={isMore} onAction={on} />}
      </div>
      <div
        className={`relative scrollbar-hidden p-1 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-4 w-full ${scroll ? "max-h-[600px] overflow-x-hidden" : "max-h-fit"} scroll-hidden scroll-none transform-3d perspective-near ${classNames}`}
      >
        {children}
      </div>
    </article>
  );
}

export default ElementoLP;
