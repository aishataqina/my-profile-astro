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
            className="tracking-wider text-sm sm:text-lg"
          >
            About Me
          </Link>
          <Link to="/" spy={true} smooth={true} offset={50} duration={500}>
            <img src={me.src} alt="" className="w-32 md:w-52" />
          </Link>
          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className=" tracking-wider text-sm sm:text-lg"
          >
            Project
          </Link>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
