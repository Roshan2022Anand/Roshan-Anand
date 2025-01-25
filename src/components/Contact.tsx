import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <section
      className="contact-sec text-primary
h-[300px] sm:col-span-2 sm:row-span-3 flex flex-col"
    >
      <article className="flex h-1/3">
        <h3 className="contact-text rounded-xl rounded-br-none">C H E C K</h3>
        <a href="roshananand2005@gmail.com" className="w-1/3">
          <FaSquareXTwitter className="size-full text-text-color" />
        </a>
      </article>

      <article className="flex justify-between h-1/3">
        <a
          href="https://www.linkedin.com/in/roshan-anand-a92b1a23a/"
          className="grow"
        >
          <img src="linkedin-icon.svg" className="size-full" />
        </a>
        <h3 className="contact-text rounded-tr-xl ">O U T</h3>
      </article>

      <article className="flex  h-1/3">
        <a href="roshananand2005@gmail.com" className="grow">
          <img src="\gmail-icon.svg" className="size-full" />
        </a>
        <div className="flex items-center contact-text rounded-b-xl p-1">
          <h3 className=" w-2/3">MY</h3>
          <a href="https://github.com/Roshan2022Anand" className="h-full">
            <FaGithubSquare className="size-full " />
          </a>
        </div>
      </article>
    </section>
  );
};

export default Contact;
