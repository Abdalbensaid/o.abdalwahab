import React from 'react';
import { motion } from 'framer-motion';
import profil from '../assets/profil.png'; // Assurez-vous que le chemin est correct

function About() {
  return (
    <section className="about" id='about'>
      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2>
          About <span>Me</span>
        </h2>
        <p>
          Passionné par le développement web, je crée des sites modernes,
          intuitifs et adaptés aux besoins spécifiques de chaque client.
          Mon objectif est de transformer vos idées en solutions digitales
          efficaces et esthétiques.
        </p>
        <a href="#portfolio" className="btn-primary">
          Voir mes travaux
        </a>

        <motion.div className="competence"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2> <span>Mes</span> competences</h2>
        </motion.div>
        <motion.div
          className="skills"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="skill-item">HTML & CSS</div>
          <div className="skill-item">JavaScript</div>
          <div className="skill-item">React</div>
          <div className="skill-item">Node.js</div>
        </motion.div>
      </motion.div>

      {/* Illustration */}
      <div className="relative mx-auto w-40 h-40 rounded-full bg-primary overflow-visible">
      <motion.img
        src={profil} // Remplacez par le chemin de votre image
        alt="Illustration About Me"
        className="absolute top-[-20%] left-[-10%] w-48 h-48 object-cover rounded-full border-4 border-white shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />
    </div>
    </section>
  );
}

export default About;