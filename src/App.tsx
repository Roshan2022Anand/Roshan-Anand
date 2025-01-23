import Profile from "./components/Profile";
import Tech from "./components/Tech";
import ThemeSection from "./components/Utility";
// import ThemeSection from "./components/Utility";

const App = () => {
  return (
    <main className="flex flex-col sm:flex-row h-screen w-screen p-2 max-w-[1100px] mx-auto">
      <article className="relative flex flex-col justify-around items-center sm:w-1/3 md:w-1/2">
        <ThemeSection />
        <Profile />
        <Tech />
      </article>
      <article className="grow">s</article>
    </main>
  );
};

export default App;
