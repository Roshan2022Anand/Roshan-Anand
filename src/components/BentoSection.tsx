import Contact from "./Contact";
import { Resume, ThemeSection } from "./Utility";

const BentoSection = () => {
  return (
    <article className="main-bento grid gap-2 grid-cols-1 sm:grid-cols-3 grid-row-5 sm:grid-rows-10 h-[500px] sm:h-[800px] md:h-[1000px] sm:w-2/3 md:w-1/2 mt-2 px-10 sm:px-2">
      <ThemeSection />
      <Resume />
      <Contact />
    </article>
  );
};

export default BentoSection;
