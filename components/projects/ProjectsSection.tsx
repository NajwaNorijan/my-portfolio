import { projects } from "../../data";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

const ProjectsSection = () => {
  const [showDetail, setShowDetail] = useState<number | null>(null);

  return (
    <>
      <section className="py-10 md:p-10 md:my-10">
        <div>
          <h3 className="py-1 text-3xl font-bold text-center dark:text-white">
            Projects
          </h3>
        </div>
        {/* <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap"> */}
        <div className="grid gap-10 py-10 md:grid-cols-2 xl:grid-cols-3 ">
          {projects.map((project) => (
            // <div className="flex-1 basis-1/3" key={project.name}>
            // <div className="w-1/3" key={project.name}>
            <div className="" key={project.name}>
              <ProjectCard
                project={project}
                showDetail={showDetail}
                setShowDetail={setShowDetail}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
