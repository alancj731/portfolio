import "./navbar.scss";
import React from "react";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          DevOps
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="facebook icon"></img>
          </a>
          <a href="#">
            <img src="/instagram.png" alt="instagram icon"></img>
          </a>
          <a href="#">
            <img src="/youtube.png" alt="youtube icon"></img>
          </a>
          <a href="#">
            <img src="/dribbble.png" alt="dribbble icon"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
