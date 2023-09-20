import React from "react";
import { motion } from "framer-motion";

import { tabContentVariant } from "../../../../utils";
import Title from "../../../../shared/components/Title/Title";

const Contact = ({ id, active }) => (
  <motion.div
    role="tabpanel"
    id={id}
    className="tab-content"
    variants={tabContentVariant}
    animate={active ? "active" : "inactive"}
    initial="inactive"
  >
    <Title title="Get In Touch" color="#ff3939" />

    <div className="lets-talk">Let's have a talk</div>
    <div className="contact-bottom-section">
      <div className="social-icon-section">
        <a
          href="https://www.facebook.com/Shivamsky8/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="icons8-facebook"></div>
        </a>
        <a
          href="https://www.instagram.com/iamshivamverma/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="icons8-instagram-logo"></div>
        </a>
        <a
          href="https://twitter.com/shivamsky8"
          target="_blank"
          rel="noreferrer"
        >
          <div className="icons8-twitter"></div>
        </a>
        <a
          href="https://www.youtube.com/channel/UC33eqjq4OYLMEysa9XvJd6w"
          target="_blank"
          rel="noreferrer"
        >
          <div className="icons8-youtube-play-button"></div>
        </a>
        <a
          href="https://www.linkedin.com/in/shivam-kumar-verma-331873126/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="icons8-linkedin"></div>
        </a>
        <a href="https://wa.me/9818502046" target="_blank" rel="noreferrer">
          <div className="icons8-whatsapp"></div>
        </a>
        <a
          href="https://github.com/shivamsky8"
          target="_blank"
          rel="noreferrer"
        >
          <div className="icons8-github"></div>
        </a>
        <a href="mailto: shivamsky8@gmail.com" rel="noreferrer">
          <div className="icons8-google-plus"></div>
        </a>
      </div>
    </div>
  </motion.div>
);

export default Contact;
