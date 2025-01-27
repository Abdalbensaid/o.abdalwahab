import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-6">
      <div className="container mx-auto px-6">
       
        <nav className="flex justify-center mb-4">
          <a href="#home" className="mx-4 hover:text-primary">
            Home
          </a>
          <a href="#about" className="mx-4 hover:text-primary">
            About me
          </a>
          <a href="#contact" className="mx-4 hover:text-primary">
            Contact
          </a>
        </nav>

        {/* Icônes des réseaux sociaux */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <FaYoutube />
          </a>
        </div>

        {/* Mentions légales */}
        <div className="text-center text-sm text-gray-400">
          <p>© 2025 SaulDesign. All rights reserved.</p>
          <p>
            <a href="#terms" className="hover:text-primary">
              Terms of Service
            </a>{" "}
            |{" "}
            <a href="#privacy" className="hover:text-primary">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};


export default Footer;