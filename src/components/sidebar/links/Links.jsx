import React from "react";
import { motion } from "framer-motion";
import "../../sidebar/sidebar.scss";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
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

const handleClick = () => {
  console.log("clicked");
};

const Links = () => {
  const items = ["Homepage", "Portfolio", "Contact", "About"];
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          onClick={handleClick}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
