import React from "react";
import { motion } from "framer-motion";

const experience = [
  {
    year: "2021 - Présent",
    title: "Développeur Web Full Stack",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    side: "left"
  },
  {
    year: "2019 - 2021",
    title: "Développeur Frontend",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    side: "right"
  },
  {
    year: "2017 - 2019",
    title: "Stagiaire Développeur",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    side: "left"
  }
];

const EducationExperience = () => {
  return (
    <motion.section 
      id="education-experience" 
      className="experience-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Expérience
        </motion.h2>
        <div className="experience-container">
          {experience.map((exp, index) => (
            <motion.div 
              key={index} 
              className={`experience-item ${exp.side}`}
              initial={{ opacity: 0, x: exp.side === "left" ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h4 className="experience-year">{exp.year}</h4>
              <h3 className="experience-title">{exp.title}</h3>
              <p className="experience-description">{exp.description}</p>
            </motion.div>
          ))}
          <div className="timeline"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default EducationExperience;