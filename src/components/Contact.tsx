import {
  FaGithub,
  FaLinkedin,
  FaSquareXTwitter,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa6";

const Contact = () => {
  return (
    <section
      className="contact-sec text-primary
     col-span-2 row-span-3 flex flex-col"
    >
      <article className="flex h-1/3">
        <h3 className="contact-text bg-text-color w-[70%] rounded-lg rounded-br-none">
          C H E C K
        </h3>
        <a href="roshananand2005@gmail.com" className="w-1/3">
          <img src="\gmail-icon.svg" className="size-full" />
        </a>
      </article>

      <article className="flex justify-between h-1/3">
        <a
          href="https://www.linkedin.com/in/roshan-anand-a92b1a23a/"
          className="mx-auto"
        >
          <FaLinkedin className="size-full text-accent-one" />
        </a>
        <h3 className="contact-text w-[70%] bg-text-color rounded-tr-lg">
          O U T
        </h3>
      </article>

      <article className="flex  h-1/3">
        <a className="mx-auto" href="https://x.com/R0SHAN_ANAND">
          <FaTwitter className="size-full text-accent-one" />
        </a>
        <div className="bg-text-color w-[70%] flex rounded-b-lg">
          <h3 className="contact-text w-2/3">MY</h3>
          <a href="https://github.com/Roshan2022Anand">
            <FaGithub className="size-full" />
          </a>
        </div>
      </article>
    </section>
  );
};

export default Contact;
