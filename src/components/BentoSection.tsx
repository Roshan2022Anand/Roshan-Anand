import Contact from "./Contact";
import { Resume, ThemeSection } from "./Utility";

const BentoSection = () => {
  return (
    <article className="main-bento grid gap-2 grid-cols-3 grid-rows-10 sm:h-[800px] md:h-[1000px] sm:w-2/3 md:w-1/2 p-1">
      <ThemeSection />
      <Resume />
      <Contact />
    </article>
  );
};

export default BentoSection;
