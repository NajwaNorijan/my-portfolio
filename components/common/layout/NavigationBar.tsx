import { BsFillMoonStarsFill } from "react-icons/bs";
import { useTheme } from "next-themes";

const NavigationBar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <nav className="flex justify-between py-10 mb-12 dark:text-white">
        <h1 className="text-xl font-burtons">najwanorijan</h1>

        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill
              className="text-2xl cursor-pointer"
              onClick={changeTheme}
            />
          </li>
          <li>
            <a
              className="px-4 py-2 ml-8 text-white border-none rounded-md bg-gradient-to-r from-cyan-500 text- to-teal-500"
              href="/assets/Nor Najwa Fazleen Norijan Resume.pdf" // url/folder must be in/from public
              download="Nor Najwa Fazleen Norijan Resume.pdf" // put in the name of the file
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavigationBar;
