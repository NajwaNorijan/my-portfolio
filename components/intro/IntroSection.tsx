import Image from "next/image";
import { AiFillGitlab, AiFillLinkedin } from "react-icons/ai";
import Spline from "@splinetool/react-spline";
import { useEffect } from "react";
import { TypeAnimation } from 'react-type-animation';

const IntroSection = () => {
  // useEffect(() => {
  //   let w = window.innerWidth;
  //   let h = window.innerHeight;
  //   console.log("width", w);
  // }, []);

  return (
    <>
      <div className="xl:pb-12 wrapper">
        <div className="">
          <Spline
            className="spline"
            scene="https://prod.spline.design/WNk6NMv0AyMh85T6/scene.splinecode"
          />
        </div>
        <div className="pt-10 text-align-left bring-to-front">

          <h2 className="py-2 text-5xl  font-bold xl:text-4xl">Hello There! I'm</h2>
          <h2 className="py-2 text-5xl font-bold text-teal-600 dark:text-teal-400 md:text-6xl md:leading-tight">
           Nor Najwa Fazleen Norijan
          </h2>
          <h3 className="py-2 text-2xl font-bold text-black dark:text-white md:text-3xl">
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                'Software Engineer',
                3000, // wait 3s before replacing 
                'Full Stack Engineer',
                3000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </h3>
          <p className="max-w-xl py-5 leading-8 text-gray-800 margin-x-auto text-md dark:text-gray-200 md:text-xl">
            A focused and independent Software Engineer that have an
            experience in developing new websites, features and maintaining a
            website from front end to back end.
          </p>
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
        </div>
      </div>
    </>
  );
};

export default IntroSection;
