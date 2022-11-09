/* eslint-disable @next/next/no-img-element */
import { FunctionComponent, useState } from "react";
import { AiFillGitlab, AiFillProject } from "react-icons/ai";
import { IProject } from "../../type";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../../animations";

const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetail: null | number;
  //is a function so the argument is id and has type either null or number and
  //return nothing which is void
  setShowDetail: (id: null | number) => void;
}> = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    description,
    gitlab_url,
    key_techs,
    id,
  },
  //add here to destructure the properties
  showDetail,
  setShowDetail,
}) => {
  return (
    <>
      {/* // <div className="rounded-xl shadow-custom-light dark:shadow-custom-dark hover:shadow-custom-teal dark:hover:shadow-custom-teal-m">
    //  "mb-10 shadow-lg cursor-pointer rounded-xl hover:shadow-xl sm:mb-0 bg-secondary-light dark:bg-ternary-dark" */}

      {/* <div>
        {showDetail === id && (
          <div className="absolute left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
            <motion.div variants={stagger} animate="animate" initial="initial">
              <motion.div
                variants={fadeInUp}
                className="border-4 border-gray-100"
              >
                <Image
                  src={image_path}
                  alt={name}
                  width="300"
                  height="150"
                  layout="responsive"
                />
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="flex justify-center my-4 space-x-3"
              >
                <a
                  href={gitlab_url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                >
                  <AiFillGitlab /> <span>Gitlab</span>
                </a>
                <a
                  href={deployed_url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                >
                  <AiFillProject /> <span> View Project</span>
                </a>
              </motion.div>
            </motion.div>
            <motion.div variants={stagger} initial="initial" animate="animate">
              <motion.h2
                variants={fadeInUp}
                className="mb-3 text-xl font-medium md:text-2xl"
              >
                {name}
              </motion.h2>
              <motion.h3 variants={fadeInUp} className="mb-3 font-medium">
                {description}
              </motion.h3>
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
              >
                {key_techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-dark-200"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </motion.div>
            <button
              onClick={() => setShowDetail(null)}
              className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 dark:bg-dark-200 focus:outline-none"
            >
              <MdClose size={30} />
            </button>
          </div>
        )}
      </div> */}

      <div className="mb-10 shadow-lg cursor-pointer shadow-custom-light rounded-xl hover:shadow-xl sm:mb-0">
        {/* {showDetail === id && (
        <div className="absolute left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <motion.div variants={stagger} animate="animate" initial="initial">
            <motion.div
              variants={fadeInUp}
              className="border-4 border-gray-100"
            >
              <Image
                src={image_path}
                alt={name}
                width="300"
                height="150"
                layout="responsive"
              />
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex justify-center my-4 space-x-3"
            >
              <a
                href={gitlab_url}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGitlab /> <span>Gitlab</span>
              </a>
              <a
                href={deployed_url}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject /> <span> View Project</span>
              </a>
            </motion.div>
          </motion.div>
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              variants={fadeInUp}
              className="mb-3 text-xl font-medium md:text-2xl"
            >
              {name}
            </motion.h2>
            <motion.h3 variants={fadeInUp} className="mb-3 font-medium">
              {description}
            </motion.h3>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
            >
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-dark-200"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
          <button
            onClick={() => setShowDetail(null)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 dark:bg-dark-200 focus:outline-none"
          >
            <MdClose size={30} />
          </button>
        </div>
      )} */}
        <div>
          <Image
            src={image_path}
            alt={name}
            className="object-cover cursor-pointer rounded-xl"
            onClick={() => setShowDetail(id)}
            width="200"
            height="150"
            // height="50"
            // width="50"
            layout="responsive"
          />
        </div>

        {/* <a className="mb-10 shadow-lg cursor-pointer rounded-xl hover:shadow-xl sm:mb-0 bg-secondary-light dark:bg-ternary-dark" aria-label="Single Project" href="https://github.com/MoElaSec/Python_Behave_Selenium_WebApp_Auto_testing" target="__blank" rel="noopener noreferrer"><div><img src="/img/web-project-2.646cb829.jpg" alt="BDD: Automate Testing Web Applications" class="rounded-t-xl border-none"></div><div class="text-center px-4 py-6"><p class="text-2xl text-ternary-dark dark:text-ternary-light font-semibold mb-2">BDD: Automate Testing Web Applications</p><span class="text-lg text-ternary-dark dark:text-ternary-light">Web Application</span></div></a> */}
        <div className="p-3">
          <p className="my-2 font-bold text-center md:text-xl">{name}</p>
        </div>
        <div>
          {showDetail === id && (
            <div className="w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 dark:text-white dark:bg-dark-100">
              <motion.div
                variants={stagger}
                animate="animate"
                initial="initial"
              >
                {/* <motion.div
                  variants={fadeInUp}
                  className="border-4 border-gray-100"
                >
                  <Image
                    src={image_path}
                    alt={name}
                    width="300"
                    height="150"
                    layout="responsive"
                  />
                </motion.div> */}
              </motion.div>
              <motion.div
                variants={stagger}
                initial="initial"
                animate="animate"
              >
                <motion.h3 variants={fadeInUp} className="mb-3 font-medium">
                  {description}
                </motion.h3>
                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
                >
                  {key_techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-dark-200"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
              </motion.div>
              <button
                onClick={() => setShowDetail(null)}
                // className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 dark:bg-dark-200 focus:outline-none"
                className="p-1 bg-gray-200 rounded-full dark:bg-dark-200 focus:outline-none"
              >
                <MdClose size={30} />
              </button>
              <motion.div
                variants={fadeInUp}
                className="flex justify-center my-4 space-x-3"
              >
                <a
                  href={gitlab_url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                >
                  <AiFillGitlab /> <span>Gitlab</span>
                </a>
                <a
                  href={deployed_url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                >
                  <AiFillProject /> <span> View Project</span>
                </a>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
