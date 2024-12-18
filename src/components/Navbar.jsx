import { Link } from "react-scroll";
import me from "../assets/aisha.png";

const Navbar = () => {
  const handleSetActive = (to) => {
    console.log(to);
  };
  return (
    <>
      <nav className="font-poppins fixed flex flex-col items-center bg-[#6ac9cb] z-50 w-screen top-0 ">
        <div className=" flex items-center text-center justify-center gap-5  w-full p-3 sm:text-base text-sm">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="relative tracking-wider text-sm sm:text-base hover:text-[#ffffff] after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#ffffff] after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300 hover:cursor-pointer"
          >
            About Me
          </Link>
          <Link to="/" spy={true} smooth={true} offset={50} duration={500}>
            <img
              src={me.src}
              alt=""
              className="w-32 md:w-40 hover:cursor-pointer"
            />
          </Link>
          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="relative tracking-wider text-sm sm:text-base hover:text-[#ffffff] after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#ffffff] after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300 hover:cursor-pointer"
          >
            Project
          </Link>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
