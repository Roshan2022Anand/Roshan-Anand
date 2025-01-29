import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiPostgresql,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const Tech = () => {
  return (
    <section className="tech-sec w-full h-[50vh] flex flex-wrap justify-evenly items-end gap-1">
      {/* TypeScript */}
      <div className="size-fit relative group bg-white rounded-[10px]">
        <SiTypescript className="text-[#3178c6] tech-icon" />
        <span className="tech-txt group-hover:block ">TypeScript</span>
      </div>

      {/* React */}
      <div className="size-fit relative group">
        <FaReact className="text-blue-400 bg-text-color tech-icon" />
        <span className="tech-txt group-hover:block ">React</span>
      </div>
      {/* Next.js */}
      <div className="size-fit relative group">
        <SiNextdotjs className="text-primary bg-text-color tech-icon" />
        <span className="tech-txt group-hover:block ">Next.js</span>
      </div>
      {/* PostgreSQL */}
      <div className="size-fit relative group">
        <SiPostgresql className="tech-icon bg-[#32678f] text-white" />
        <span className="tech-txt group-hover:block ">PostgreSQL</span>
      </div>
      {/* Express */}
      <div className="size-fit relative group">
        <SiExpress className="tech-icon bg-text-color text-primary" />
        <span className="tech-txt group-hover:block ">Express</span>
      </div>
      {/* Node.js */}
      <div className="size-fit relative group">
        <FaNodeJs className="text-green-500 bg-text-color tech-icon" />
        <span className="tech-txt group-hover:block ">Node.js</span>
      </div>
      {/* MongoDB */}
      <div className="size-fit relative group">
        <SiMongodb className="text-green-400 bg-text-color tech-icon" />
        <span className="tech-txt group-hover:block ">MongoDB</span>
      </div>
      {/* Tailwind CSS */}
      <div className="size-fit relative group">
        <SiTailwindcss className="text-cyan-400 bg-text-color tech-icon" />
        <span className="tech-txt group-hover:block ">Tailwind</span>
      </div>
    </section>
  );
};

export default Tech;
