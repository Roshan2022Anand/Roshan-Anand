import { useState } from "react";
import { FaSun } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";

export const ThemeSection = () => {
  const [isDarkMode, setisDarkMode] = useState(true);

  const root = document.documentElement.style;
  if (isDarkMode) {
    // Dark Theme
    root.setProperty("--primary-color", "#181818");
    root.setProperty("--secondary-color", "#202020");
    root.setProperty("--text-color", "#ffffff");
    root.setProperty("--accent-one-color", "#66b2ff");
    root.setProperty("--accent-two-color", "#a1a1a1");
  } else {
    // Light Theme
    root.setProperty("--primary-color", "#feffff");
    root.setProperty("--secondary-color", "#fbfbfb");
    root.setProperty("--text-color", "#000000");
    root.setProperty("--accent-one-color", "#4092ef");
    root.setProperty("--accent-two-color", "#e1dedb");
  }
  return (
    <section className="flex bg-accent-one rounded-md p-1">
      <button
        className={`grow  rounded-md ${!isDarkMode && "bg-secondary"}`}
        onClick={() => setisDarkMode(false)}
      >
        <FaSun className="size-2/3 mx-auto" />
      </button>
      <button
        className={`grow rounded-md ${isDarkMode && "bg-secondary"}`}
        onClick={() => setisDarkMode(true)}
      >
        <IoMoon className="size-2/3 mx-auto" />
      </button>
    </section>
  );
};

export const Resume = () => {
  return (
    <section className="resume-sec bg-secondary border-2 border-accent-two rounded-md p-1 col-span-2">
      <p>resume</p>
    </section>
  );
};
