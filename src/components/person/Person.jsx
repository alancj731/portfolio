import "./person.scss";
import { motion } from "framer-motion";

const textVariants = {
  hidden: {
    opacity: 0,
    x: -500,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scroll: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
      }
  }
};



const Person = () => {
  return (
    <div className="person">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="hidden" animate="visible">
          <motion.h2 variants={textVariants}> Jian Chen</motion.h2>
          <motion.h1 variants={textVariants}>Web Developer Data Engineer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>My Personal Projects</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img src="scroll.png" alt="scroll" animate="scroll" variants={textVariants}/>
        </motion.div>
      </div>
      <div className="imageContainer">
        <img src="hero.png" alt="me" />
      </div>
    </div>
  );
};

export default Person;
