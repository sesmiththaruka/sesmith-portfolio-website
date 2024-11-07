import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10  flex items-center justify-between bg-white/3 backdrop-blur-lg  shadow-md">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-8" src={logo} alt="logo" />
      </div>

      <div className="flex gap-8 text-lg">
        {/* Navbar links */}
        {/* <Link to="about" smooth={true} duration={500} offset={-150} className="cursor-pointer">
          About Me
        </Link> */}
        <Link to="technologies" smooth={true} duration={500} offset={-180} className="cursor-pointer">
          Technologies
        </Link>
        <Link to="experience" smooth={true} duration={500} offset={-80} className="cursor-pointer">
          Experience
        </Link>
        <Link to="projects" smooth={true} duration={500} offset={-80} className="cursor-pointer">
          Projects
        </Link>


        <Link to="myContacts" smooth={true} duration={500} offset={-80} className="cursor-pointer">
          Contact
        </Link>
      </div>

      <div className="m-5 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/sesmiththaruka/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/sesmiththaruka/" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      
      </div>

    </nav>
  );
};

export default Navbar
