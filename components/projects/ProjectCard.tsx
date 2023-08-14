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
  // setCurrentDetail: (id: null | number) => void;
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
  // setCurrentDetail,
}) => {
  return (
    <>
      <div className="mb-10 shadow-lg cursor-pointer shadow-custom-light rounded-xl hover:shadow-xl sm:mb-0">
        <div>
          <Image
            src={image_path}
            alt={name}
            className="object-cover cursor-pointer rounded-t-xl"
            onClick={() => {
              showDetail === id ? setShowDetail(null) : setShowDetail(id)
            }}
            width="200"
            height="150"
            // height="50"
            // width="50"
            layout="responsive"
          />
        </div>

        <div className={`p-3 bg-teal-600 ${showDetail === id ? (null) : ("rounded-b-xl")} `} onClick={() => 
          showDetail === id ? setShowDetail(null) : setShowDetail(id)
          }>
          <p className="my-2 font-bold text-white text-center md:text-xl">{name}</p>
        </div>
        <div>
          {showDetail === id && (
            <div className="w-full h-auto p-2 text-black bg-gray-100 rounded-b-lg md:p-10 dark:text-white dark:bg-dark-100">
              <motion.div
                variants={stagger}
                animate="animate"
                initial="initial"
              >
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
                      className="px-2 py-1 my-1 bg-cyan-300 rounded-md dark:text-black"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="flex justify-center my-4 space-x-3"
              >
                <a
                  href={gitlab_url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center px-4 py-2 space-x-3 text-lg bg-yellow-300 dark:text-black rounded-lg"
                >
                  <AiFillGitlab /> <span>Check out on Gitlab</span>
                </a>
                {/* <a
                  href={deployed_url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                >
                  <AiFillProject /> <span> View Project</span>
                </a> */}
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
