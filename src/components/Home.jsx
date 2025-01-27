import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className="home" id="home">
      {/* Animation d'entrée avec Framer Motion */}
      <motion.div
        className="home-content"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Développeur Web</h1>
        <p>
          Je suis spécialisé dans le développement de sites web modernes et intuitifs.
        </p>
        <div className="buttons">
          <button className="btn-primary">M'engager</button>
          <button className="btn-secondary">Download CV</button>
        </div>
      </motion.div>

      {/* Illustration */}
      <motion.img
        src="/assets/illustration.png" // Remplacez par le chemin de votre image
        alt="Illustration Développeur Web"
        className="home-illustration"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
    </section>
  );
};

export default Home;
