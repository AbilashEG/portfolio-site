import { motion } from "framer-motion";

const ProjectDetails = ({ title, description, subDescription, image, tags, href, closeModal }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 30, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-center items-center p-6"
    >
      <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 max-w-3xl w-full shadow-2xl relative">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-300 hover:text-red-500 text-xl"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
        <p className="text-white/80 mb-4">{description}</p>
        {subDescription && (
          <ul className="list-disc ml-5 text-white/70 space-y-2">
            {subDescription.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
        <div className="flex gap-2 mt-4 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag.id}
              className="px-3 py-1 rounded-full bg-indigo-600 text-white text-xs"
            >
              {tag.name}
            </span>
          ))}
        </div>
        <div className="mt-6">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition"
          >
             View on GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
