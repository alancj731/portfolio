import "./person.scss";
import { motion } from "framer-motion";
import {useState} from "react";

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

const imageVariants = {
  hidden: {
    opacity: 0,
    x: 0,
    y: -400,
    scale: 0,
  },
  visible: {
    opacity: 1,
    x: -300,
    y: 0,
    scale: 1,
    transition: {
      duration: 3,
    },
  },
};




const Person = () => {
  return (
    <div className="person">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="hidden" animate="visible">
          <motion.h2 variants={textVariants}> Jian Chen</motion.h2>
          <motion.h1 variants={textVariants}>Web Developer<br/>Data Engineer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants} onClick={()=>{window.location.href='#Portfolio'}}>My Personal Projects</motion.button>
            <motion.button variants={textVariants } onClick={()=>{window.location.href='#Contact'}}>Contact Me</motion.button>
          </motion.div>
          <motion.img src="scroll.png" alt="scroll" animate="scroll" variants={textVariants}/>
        </motion.div>
      </div>
      <motion.div className="imageContainer" variants={imageVariants} initial="hidden" animate="visible">
        <motion.img src="header-img.svg" alt="me" className="floatingImg" />
      </motion.div>
    </div>
  );
};

export default Person;
