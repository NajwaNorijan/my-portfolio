/* eslint-disable @next/next/no-img-element */
import { AiFillGitlab, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <Image
        src="images/profile-pic/najwa-pic.jpg"
        alt="user avatar"
        className="mx-auto rounded-full"
        layout="intrinsic" //if we dont put this also no problem because deault layout is intrinsic
        height="150px" // its also okay if we dont put px
        width="128px"
        quality="100" //default 75, highestr quality is 100
      />

      <h3 className="my-4 text-3xl font-bold tracking-wider font-robotoSlab">
        <span className="">Nor Najwa Fazleen </span>Norijan
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Full Stack Engineer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 text-white bg-blue-400 rounded-full"
        href="/assets/Nor Najwa Fazleen Norijan Resume.pdf" // url/folder must be in/from public
        download="Nor Najwa Fazleen Norijan Resume.pdf" // put in the name of the file
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
      {/* Social Icon */}
      <div className="flex justify-center w-9/12 mx-auto my-5 text-blue-400 md:w-full">
        <div className="px-2">
          <a
            href="https://gitlab.com/najwanorijan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGitlab className="w-8 h-8 cursor-pointer" />
          </a>
        </div>
        <div className="px-2">
          <a
            href="https://www.linkedin.com/in/najwa-norijan-864469196/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
          </a>
        </div>
      </div>

      {/* address */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Shah Alam, Selangor</span>
        </div>
        <p className="mt-2">najwanorijan@gmail.com</p>
        {/* <p className="my-2">+60178895368</p> */}
      </div>
      {/* Email Button */}
      <button
        className="w-8/12 px-5 py-2 my-2 text-white bg-blue-400 rounded-full cursor-pointer focus:outline-none"
        onClick={() => window.open("mailto:najwanorijan@gmail.com")}
      >
        Email Me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-2 text-white bg-blue-400 rounded-full cursor-pointer"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
