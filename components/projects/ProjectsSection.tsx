import { projects } from "../../data";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

const ProjectsSection = () => {
  const [showDetail, setShowDetail] = useState<number | null>(null);
  const [currentDetail, setCurrentDetail] = useState(null)

  return (
    <>
      <section className="p-10 md:my-10 bg-gray-600">
        <div>
          <h3 className="py-1 text-3xl font-bold text-center text-white">
            Projects
          </h3>
        </div>
        <div className="grid gap-10 py-10 md:grid-cols-2 xl:grid-cols-3 ">
          {projects.map((project) => (
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
