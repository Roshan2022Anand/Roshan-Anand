import { BentoSectionOne } from "./components/BentoSection";
import Contact from "./components/Contact";
import Profile from "./components/Profile";

const App = () => {
  return (
    <main className="flex flex-col items-center lg:flex-row lg:justify-end px-2 mx-auto">
      <article className="lg:fixed top-1 left-0 py-10 flex flex-col justify-evenly items-center w-full h-full lg:w-[35%] ">
        <Profile />
        <Contact />
      </article>
      <BentoSectionOne />
    </main>
  );
};

export default App;
