import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

const Hero = () => {
  return (
      <div id="home" className="flex items-center h-screen px-8 py-3">
        <main className="text-left">
          <h2 className="text-4xl font-semibold font-afacad text-jwGreen">
            My name is
          </h2>
          <h1 className="py-3 text-title font-bebas text-jwYellow leading-tightest">
            Jeffrey <br /> Wong
          </h1>
          <div className="flex gap-5 text-4xl">
            <a
              href="https://github.com/JeffreyWongg"
              target="_blank"
              className="text-jwBlue"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jeffrey-wong-bb1173261/"
              target="_blank"
              className="text-jwPurple"
            >
              <FiLinkedin />
            </a>
            <a
              href="@jeffrey.wong.businessmail@gmail.com"
              target="_blank"
              className="text-jwPink"
            >
              <FiMail />
            </a>
          </div>
        </main>
      </div>
  );
};

export default Hero;
