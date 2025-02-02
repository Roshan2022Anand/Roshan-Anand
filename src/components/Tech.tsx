import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiPostgresql,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { motion } from "motion/react";

const icons = [
  {
    Component: SiTypescript,
    color: "#3178c6",
    animate: { opacity: 1, top: "10%", left: "50%" },
  },
  {
    Component: FaReact,
    color: "#61DBFB",
    animate: { opacity: 1, top: "25%", left: "70%" },
  },
  // { Component: SiNextdotjs, color: "#FFFFFF" },
  // { Component: SiPostgresql, color: "#32678f" },
  // { Component: SiExpress, color: "#FFFFFF" },
  // { Component: FaNodeJs, color: "#3C873A" },
  // { Component: SiMongodb, color: "#4DB33D" },
  // { Component: SiTailwindcss, color: "#38BDF8" },
];

const duration = 1.5; // Animation duration

const Tech = () => {
  return (
    <section className="relative col-span-3 row-span-6">
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        🧠
      </h1>
      <article
        className="tech-logo-sec border-2 size-full rounded-full relative"
        // animate={{ rotate: 360 }}
        // transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {icons.map(({ Component, color, animate }, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, top: "50%", left: "50%" }}
              animate={animate}
              transition={{ delay: 0.2 * index, duration }}
              className="absolute"
              style={{
                color,
                transform: `translate(-50%, -50%)`,
              }}
            >
              <Component className="icon-md" />
            </motion.div>
          );
        })}
      </article>
    </section>
  );
};

export default Tech;
