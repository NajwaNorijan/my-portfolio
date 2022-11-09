import Image from "next/image";
import { AiFillGitlab, AiFillLinkedin } from "react-icons/ai";
import Spline from "@splinetool/react-spline";
import { useEffect } from "react";

const IntroSection = () => {
  // useEffect(() => {
  //   let w = window.innerWidth;
  //   let h = window.innerHeight;
  //   console.log("width", w);
  // }, []);

  return (
    <>
      {/* <h5>width: {w}</h5>
      <h5>height: {h}</h5> */}
      {/* <div className="p-10 py-10 text-center"> */}
      {/* <div className="flex flex-row-reverse justify-between"> */}
      {/* <div className="flex flex-row-reverse justify-between wrapper"> <<<< */}
      {/* <div className="flex flex-row-reverse justify-between wrapper"> */}
      <div className="xl:pb-12 wrapper">
        {/* <div className="p-10"> */}
        <div className="">
          <Spline
            className="spline"
            scene="https://prod.spline.design/WNk6NMv0AyMh85T6/scene.splinecode"
          />
        </div>
        {/* <div className="py-10 pr-10 text-align-left bring-to-front"> */}
        {/* <div className="py-10 text-align-left bring-to-front"> */}
        <div className="pt-10 text-align-left bring-to-front">
          <h2 className="py-2 text-5xl font-bold text-teal-600 dark:text-teal-400 md:text-6xl md:leading-tight">
            Nor Najwa Fazleen Norijan
          </h2>
          <h3 className="py-2 text-2xl font-bold dark:text-white md:text-3xl">
            Full Stack Engineer
          </h3>
          {/* <p className="max-w-xl py-5 mx-auto leading-8 text-gray-800 text-md dark:text-gray-200 md:text-xl"> */}
          <p className="max-w-xl py-5 leading-8 text-gray-800 margin-x-auto text-md dark:text-gray-200 md:text-xl">
            A focused and independent Full Stack Engineer that have an
            experience in developing new websites, features and maintaining a
            website from front end to back end.
          </p>
          {/* <div className="flex justify-center gap-16 py-3 text-5xl text-gray-600 dark:text-gray-400"> */}
          <div className="flex gap-16 py-3 text-5xl text-gray-600 flex-justify-center dark:text-gray-400">
            <a
              href="https://gitlab.com/najwanorijan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGitlab className="w-8 h-8 cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/najwa-norijan-864469196/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
            </a>
          </div>
          {/* <div className="relative mx-auto mt-20 overflow-hidden rounded-full bg-gradient-to-b from-teal-500 w-80 h-80 md:h-96 md:w-96"> */}
          {/* <div className="relative w-48 h-48 mt-20 overflow-hidden rounded-full bg-gradient-to-b from-teal-500 md:h-80 md:w-80">
            <Image
              src="images/profile-pic/najwa-pic-nobg.png"
              alt="user avatar"
              layout="fill"
              objectFit="cover"
            />
          </div> */}
          {/* <div className="">
            <Spline
              className="spline"
              scene="https://prod.spline.design/WNk6NMv0AyMh85T6/scene.splinecode"
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default IntroSection;
