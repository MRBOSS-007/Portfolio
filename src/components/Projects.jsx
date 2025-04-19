import { motion } from 'framer-motion';
import { useState } from 'react';
import './scroll.css'; // Add custom CSS here for the animation

const projects = [
  {
    title: "R.A.I.D",
    description: "The system identifies the authenticity of disaster-related tweets and classifies CCTV images into disaster categories with a severity score. Based on the classification, it allocates resources like supplies, personnel, and equipment to the most affected areas. Real-time updates enable efficient coordination, minimizing response time and maximizing aid effectiveness.",
    technologies: ["React", "Node.js", "MongoDB","Express.JS","OpenCV","AI/ML"],
    link: "#",
    images: [
      "Home Page.png",
      "/image_classification.png",
      "/resource_allocation.png",
      "/resource_management.png"
    ]
  },
  {
    title: "Data4u",
    description: "The system allows students to register for various arts and sports activities through a user-friendly interface. House captains can access detailed information about each registered student, including their selected activities and participation history",
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
    link: "#",
    images: [
      "/1.png",
      "/2.png",
      "/3.png",
      "4.png"
    ]
  }
];

export default function Projects() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (image) => {
    setModalImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="projects" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text"
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Animated image scroll on top */}
              {project.images && project.images.length > 0 && (
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <div className="flex gap-4 w-max animate-scroll">
                    {[...project.images, ...project.images].map((img, imgIndex) => (
                      <motion.img
                        key={imgIndex}
                        src={img}
                        alt={`${project.title} image ${imgIndex + 1}`}
                        className="w-[300px] h-[180px] object-cover rounded-lg shadow-sm transition-transform duration-300 hover:scale-110 hover:z-10 cursor-pointer"
                        onClick={() => openModal(img)}
                      />
                    ))}
                  </div>
                </div>
              )}

              <h3 className="text-2xl font-semibold mb-4 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-blue-800 text-blue-100 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-flex items-center text-blue-400 hover:text-blue-200 transition-colors duration-300"
              >
                View Project
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for image pop-up */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative">
            <img
              src={modalImage}
              alt="Modal Image"
              className="max-w-4xl max-h-4xl object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 text-white text-4xl p-2"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
