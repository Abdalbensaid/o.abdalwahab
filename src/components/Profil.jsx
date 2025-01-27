import profil from './assets/profil.png';
function About() {
    return (
<motion.img
  src={profil}
  alt="Illustration About Me"
  className="about-illustration"
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
/>);
}
