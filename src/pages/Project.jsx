import ProjectItem from "../components/ProjectItem";

const Project = () => {
  return (
    <>
      <div
        className="bg-[#caf0f8] h-screen flex flex-col gap-10 justify-center items-center text-center font-poppins md:px-16 px-10"
        id="project"
      >
        <h1 className="logo md:text-7xl sm:text-6xl xs:text-4xl text-4xl">
          ✨ My Project ✨
        </h1>
        {/* <motion.div
          animate={{ scale: [0, 1.2, 1] }}
          transition={{✨
         duration: 2,
            repeat: 0,
            ease: "easeInOut",
          }}
        > */}
        <ProjectItem />
        {/* </motion.div> */}
      </div>
    </>
  );
};
export default Project;
