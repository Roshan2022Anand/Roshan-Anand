import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="w-full h-2/3 flex justify-evenly items-end">
      <a href="roshananand2005@gmail.com">
        <FaSquareXTwitter className="icon-sm" />
      </a>
      <a href="https://www.linkedin.com/in/roshan-anand-a92b1a23a/">
        <CiLinkedin className="icon-sm" />
      </a>
      <a href="https://github.com/Roshan2022Anand">
        <FaGithub className="icon-sm" />
      </a>
    </section>
  );
};

export default Contact;
