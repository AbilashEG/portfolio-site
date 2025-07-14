import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectDetails from "./ProjectDetails";

const Projects = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
     <motion.div
  whileHover={{ scale: 1.03 }}
  transition={{ duration: 0.15, ease: "easeInOut" }}


        className="bg-white dark:bg-neutral-900 text-black dark:text-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between min-h-[260px]"
      >
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
        <button
          onClick={() => setShowDetails(true)}
          className="text-indigo-600 hover:underline text-sm font-medium self-start"
        >
          Read More →
        </button>
      </motion.div>

      <AnimatePresence>
        {showDetails && (
          <ProjectDetails
            title={project.title}
            description={project.description}
            subDescription={project.subDescription}
            image={project.image}
            tags={project.tags}
            href={project.href}
            closeModal={() => setShowDetails(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
