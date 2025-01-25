import BentoSection from "./components/BentoSection";
import Profile from "./components/Profile";
import Tech from "./components/Tech";

const App = () => {
  return (
    <main className="flex flex-col sm:flex-row sm:justify-end w-screen mx-auto">
      <article className="sm:fixed top-1 left-0 h-screen flex flex-col justify-around items-center sm:w-1/3 md:w-1/2">
        <Profile />
        <Tech />
      </article>
      <BentoSection/>
    </main>
  );
};

export default App;
