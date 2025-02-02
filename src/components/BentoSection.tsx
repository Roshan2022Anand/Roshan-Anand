import Tech from "./Tech";
import { Resume } from "./Utility";

export const BentoSectionOne = () => {
  return (
    <article className="main-bento grid gap-2 grid-cols-3 grid-rows-10 h-screen w-full md:w-[80vw] lg:w-[60%] mt-2 px-10 lg:px-2">
      <Resume />
      <Tech />
    </article>
  );
};
