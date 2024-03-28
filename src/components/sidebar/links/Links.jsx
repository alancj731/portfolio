import React, { useState } from "react";
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

const Links = () => {
  
  const [focusItem, setFocusItem] = useState(0);

  const handleClick = (e) => {
    console.log(e.target.id);
  };
  
  const items = ["Homepage", "Portfolio", "Contact", "About"];
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item, index) => (
        <motion.a
          href={`#${item}`}
          id={index}
          key={item}
          variants={itemVariants}
          onClick={(e) => handleClick(e)}
          className={index === focusItem ? "active" : ""}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
