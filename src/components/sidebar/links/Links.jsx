import React from "react";
import { motion } from "framer-motion";
import "../../sidebar/sidebar.scss";

const variants = {
  open: {
    transition: {
      staggerChildren: 1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.5,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Homepage", "Portfolio", "Contact", "About"];
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a href={`#${item}`} key={item} variants={itemVariants}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
