import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import bg2 from "../assets/bg2.jpg";
import me from "../assets/akuuu.png";
import react from "../assets/react.png";
import js from "../assets/js.png";
import tailwind from "../assets/tailwind.png";
import vscode from "../assets/vscode.png";

const Profile = () => {
  return (
    <>
      <div className="relative min-h-screen" id="/">
        <img
          src={bg2.src}
          alt="background"
          className="w-full h-screen aspect-video object-cover"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex md:flex-row flex-col justify-center items-center w-full gap-10 xs:gap-8 md:gap-20 z-10 md:px-16 px-10">
          <div className="lg:w-1/4 md:w-1/2 xs:w-1/2 w-2/3 flex flex-col gap-3">
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: [20, 0, 20] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className=" flex justify-center object-cover"
            >
              <img src={me.src} alt="Aisha Taqina" className="lg:w-full" />
            </motion.div>
            <div className="flex justify-center items-center gap-5">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <img src={react.src} alt="Profile" className="xs:w-16 w-10" />
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <img src={js.src} alt="Profile" className="xs:w-16 w-10" />
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <img
                  src={tailwind.src}
                  alt="Profile"
                  className="xs:w-16 w-10"
                />
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <img src={vscode.src} alt="Profile" className="xs:w-16 w-10" />
              </motion.div>
            </div>
          </div>

          {/* biodata */}
          <div className="text-black text-xl lg:w-1/2 tracking-wider lg:text-left text-center font-poppins">
            <div className="flex flex-col gap-2">
              <p className="md:text-xl sm:text-lg xs:text-base text-sm font-light">
                Hello, I&apos;m{" "}
                <span className="logo font-bold sm:text-3xl text-base tracking-wider">
                  Aisha
                </span>
                . I&apos;m
              </p>
              <div>
                <div className="tracking-widest">
                  <h1 className="logo font-extrabold md:text-7xl sm:text-6xl xs:text-4xl text-4xl">
                    Front End
                  </h1>
                  <TypeAnimation
                    sequence={["Developer", 1000, "", 1000]}
                    wrapper="span"
                    speed={10}
                    style={{ display: "inline-block" }}
                    repeat={Infinity}
                    className="logo font-extrabold md:text-7xl sm:text-6xl xs:text-4xl text-4xl"
                  />
                </div>
                <p className="mt-2 md:text-xl sm:text-lg xs:text-base text-sm items-center flex justify-center text-justify lg:w-10/12 font-light">
                  Passionate about creating interactive, user-friendly web
                  experiences. Skilled in React, JavaScript, and modern web
                  development tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
