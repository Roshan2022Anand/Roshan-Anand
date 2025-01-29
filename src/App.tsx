import BentoSection from "./components/BentoSection";
import Profile from "./components/Profile";
import Tech from "./components/Tech";

const App = () => {
  return (
    <main className="flex flex-col items-center lg:flex-row lg:justify-end px-2 mx-auto">
      <article className="lg:fixed top-1 left-0 h-screen flex flex-col justify-around items-center w-full lg:w-[35%]">
        <Profile />
        <Tech />
      </article>
      <BentoSection/>
    </main>
  );
};

export default App;
