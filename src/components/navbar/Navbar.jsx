import "./navbar.scss";
import React from "react";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Sidebar />
      </div>
      <div className="wrapper">
        <div className="welcome">
          <span
          >
            <img id="hello" src="/welcome.gif" alt="hello icon"></img>
          </span>
        </div>
        <div className="social">
          <a href="#">
            <img src="/linkedin.webp" alt="LinkedIn icon"></img>
          </a>
          <a href="#">
            <img src="/github.png" alt="Github icon"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
