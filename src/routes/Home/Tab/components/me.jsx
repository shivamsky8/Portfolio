/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { motion } from "framer-motion";
import { tabContentVariant } from "../../../../utils";
import stars from "../../../../star.png";
import pc from "../../../../program.png";
import "./common.css";
import GitIcon from "./GitIcon";

const Me = ({ id, active }) => (
  <motion.div
    role="tabpanel"
    id={id}
    className="home-wrapper"
    variants={tabContentVariant}
    animate={active ? "active" : "inactive"}
    initial="inactive"
  >
    <div className="home-wrapper-1">
      <div className="home-left">
        <span className="home-greet">Hello!</span>
        <span className="home-intro">
          I'm Shivam Verma, a Full Stack Developer
          <img
            src="https://www.animatedimages.org/data/media/585/animated-laptop-and-notebook-image-0027.gif"
            border="0"
            alt="animated-laptop-and-notebook-image-0037"
            height="30"
            width="30"
            className="duck-pc"
          />
          <br />
          specializing in Frontend
          <img
            src={stars}
            border="0"
            alt="animated-laptop-and-notebook-image-0037"
            height="30"
            width="30"
            className="stars"
          />
        </span>
      </div>
      <div className="home-right">
        <img
          src={pc}
          border="0"
          alt="animated-laptop-and-notebook-image-0037"
          height="500"
          width="500"
          className="main-img"
        />
      </div>
    </div>
    <div className="icon-wrapper">
      <a href="https://github.com/shivamsky8" target="_blank" rel="noreferrer">
        <img
          src="https://img.icons8.com/doodle/50/000000/linkedin-circled.png"
          alt=""
        />
      </a>
      <a href="https://github.com/shivamsky8" target="_blank" rel="noreferrer">
        <img
          src="https://img.icons8.com/doodle/50/000000/twitter-circled.png"
          alt=""
        />
      </a>
      <a href="https://github.com/shivamsky8" target="_blank" rel="noreferrer">
        <img
          src="https://img.icons8.com/doodle/50/000000/facebook-new.png"
          alt=""
        />
      </a>
      <a href="https://github.com/shivamsky8" target="_blank" rel="noreferrer">
        <GitIcon />
      </a>
    </div>
  </motion.div>
);

export default Me;
