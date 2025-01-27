import React from 'react';
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Merci pour votre message. Je vous répondrai bientôt !");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-form" id='contact'>
      <div className="contact-info" >
        <h2>
          Vous avez un projet <span>en tête ?</span>
        </h2>
        <motion.img
          src="/images/project-idea.svg" // Remplacez par votre illustration
          alt="Project Idea"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>
      <form onSubmit={handleSubmit} className="form">
        <motion.input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleChange}
          whileFocus={{ scale: 1.05 }}
          required
        />
        <motion.input
          type="email"
          name="email"
          placeholder="Votre courriel"
          value={formData.email}
          onChange={handleChange}
          whileFocus={{ scale: 1.05 }}
          required
        />
        <motion.textarea
          name="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
          whileFocus={{ scale: 1.05 }}
          required
        />
        <motion.button
          type="submit"
          className="send-button"
          whileHover={{ scale: 1.1 }}
        >
          Envoyer Message
        </motion.button>
      </form>
    </div>
  );
};



export default Contact;