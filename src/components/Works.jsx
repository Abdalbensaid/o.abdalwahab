import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaPaintBrush, FaMobileAlt, FaTh } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    category: "Web",
    image: "/assets/project-web-1.png",
    title: "Projet Web 1",
  },
  {
    id: 2,
    category: "UX",
    image: "/assets/project-ux-1.png",
    title: "Projet UX 1",
  },
  {
    id: 3,
    category: "Mobile",
    image: "/assets/project-mobile-1.png",
    title: "Projet Mobile 1",
  },
  {
    id: 4,
    category: "Web",
    image: "/assets/project-web-2.png",
    title: "Projet Web 2",
  },
  {
    id: 5,
    category: "UX",
    image: "/assets/project-ux-2.png",
    title: "Projet UX 2",
  },
  {
    id: 6,
    category: "Mobile",
    image: "/assets/project-mobile-2.png",
    title: "Projet Mobile 2",
  },
];

const Works = () => {
    
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="recent-works">
      <h2>
        My Recent <span>Works</span>
      </h2>
      <p className="section-description">
        Découvrez mes récents projets dans les domaines du Web, UX, et Mobile.
      </p>

      {/* Catégories */}
      <div className="categories">
        {["All", "Web", "UX", "Mobile"].map((category) => (
          <button
            key={category}
            className={activeCategory === category ? "active" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projets */}
      <motion.div
        className="projects-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Works;
