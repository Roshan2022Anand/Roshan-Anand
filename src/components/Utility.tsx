import { useState } from "react";
import { FaEye, FaSun } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
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
    <section className="flex p-1 bg-[#ff701e] rounded-md h-[100px]">
      <button
        className={`grow rounded ${!isDarkMode && "bg-white"}`}
        onClick={() => setisDarkMode(false)}
      >
        <FaSun className="size-2/3 mx-auto text-yellow-400" />
      </button>
      <button
        className={`grow rounded-md ${isDarkMode && "bg-white"}`}
        onClick={() => setisDarkMode(true)}
      >
        <IoMoon className="size-2/3 mx-auto text-black" />
      </button>
    </section>
  );
};

export const Resume = () => {
  return (
    <section className="resume-sec bg-[#ff701e] text-white rounded-md p-1 sm:col-span-1 lg:col-span-2 flex items-center justify-between">
      <h3 className="text-[35px]">resume</h3>
      <button className="grow h-full">
        <IoMdDownload className="size-2/3" />
      </button>
      <button className="grow h-full">
        <FaEye className="size-2/3" />
      </button>
    </section>
  );
};