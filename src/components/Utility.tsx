import { FaEye } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

export const Resume = () => {
  return (
    <section className="resume-sec bg-accent-two text-white rounded-md p-1 sm:col-span-1 lg:col-span-2 flex items-center justify-between">
      <h3 className="w-1/2 text-center">resume</h3>
      <button className="grow h-full">
        <IoMdDownload className="size-2/3" />
      </button>
      <button className="grow h-full">
        <FaEye className="size-2/3" />
      </button>
    </section>
  );
};
