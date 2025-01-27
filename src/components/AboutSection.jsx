import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <motion.section 
      id="about" 
      className="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="about-content">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          À Propos de Moi
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
          velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at
          turpis condimentum lobortis.
        </motion.p>
        <motion.div 
          className="skills"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="skill-item">HTML & CSS</div>
          <div className="skill-item">JavaScript</div>
          <div className="skill-item">React</div>
          <div className="skill-item">Node.js</div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;