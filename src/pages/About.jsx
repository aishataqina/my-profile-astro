import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import aisha2 from "../assets/aisha2.png";
import bunga from "../assets/bunga.png";
import resume from "../assets/CV_Aisha_Taqina.pdf";

const About = () => {
  return (
    <div
      id="about"
      className="font-poppins md:px-16 px-10 flex justify-center items-center bg-primary-purple py-24 min-h-screen md:flex-row flex-col w-full gap-10 xs:gap-8 md:gap-20"
    >
      {/* biodata */}
      <div className="lg:w-1/2 flex flex-col gap-5">
        <div className="lg:text-justify text-center tracking-wider">
          <h1 className="logo font-extrabold md:text-7xl sm:text-6xl xs:text-4xl text-4xl ">
            Hello, I&apos;m
          </h1>
          <TypeAnimation
            sequence={["Aisha Taqina", 1000, "", 1000]}
            wrapper="span"
            speed={10}
            style={{ display: "inline-block" }}
            repeat={Infinity}
            className="logo font-extrabold md:text-7xl sm:text-6xl xs:text-4xl text-4xl"
          />
        </div>
        <p className="md:text-xl sm:text-lg xs:text-base text-sm items-center text-justify flex justify-center lg:w-10/12 font-light">
          I&apos;m a front end developer and informatics engineering student
          with an interest in programming, especially web app development. I
          started my coding journey by attending the Hacktiv8 bootcamp as Front
          End React developer. I’m excited to develop my skills further and make
          a meaningful contribution to the technology industry.
        </p>
        <div className="flex items-center lg:items-start text-center flex-col gap-2">
          <p className="font-semibold md:text-xl sm:text-lg xs:text-base text-sm uppercase">
            Discover more about me
          </p>
          <div className="button">
            <a href={resume} download="CV_Aisha_Taqina.pdf">
              <p className="logo tracking-wider sm:text-xl text-sm">
                Click Here!
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* my picture */}
      <div className="relative lg:w-1/5 md:w-full xs:w-1/2 w-2/3">
        <img src={aisha2.src} alt="Aisha" className="w-full" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 right-0 transform -translate-x-1/2 -translate-y-1/2 xs:w-16 w-10"
        >
          <img src={bunga.src} alt="Bunga" className="w-full" />
        </motion.div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-32 -left-10 transform -translate-x-1/2 translate-y-1/2 xs:w-16 w-10"
        >
          <img src={bunga.src} alt="Bunga" className="w-full" />
        </motion.div>
      </div>
    </div>
  );
};
export default About;
