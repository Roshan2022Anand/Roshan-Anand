import Contact from "./Contact";
import { Resume, ThemeSection } from "./Utility";

const BentoSection = () => {
  return (
    <article className="main-bento grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-10 lg:h-[85vw] w-full md:w-[80vw] lg:w-[60%] mt-2 px-10 lg:px-2">
      <ThemeSection />
      <Resume />
      <Contact />
    </article>
  );
};

export default BentoSection;
