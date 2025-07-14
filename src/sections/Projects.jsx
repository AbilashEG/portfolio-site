import { myProjects } from "../constants";
import Projects from "../components/Project";

const ProjectSection = () => {
  return (
    <section id="projects" className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-display font-bold text-primary mb-8 text-center">
        Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {myProjects.map((project) => (
          <Projects key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
