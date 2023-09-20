import React from "react";
import { motion } from "framer-motion";
import profile from "../../../../profile.jpeg";
import resume from "../../../..//resume.pdf";
import { tabContentVariant } from "../../../../utils";
import Title from "../../../../shared/components/Title/Title";

const About = ({ id, active }) => (
  <motion.div
    role="tabpanel"
    id={id}
    className="tab-content"
    variants={tabContentVariant}
    animate={active ? "active" : "inactive"}
    initial="inactive"
  >
    <Title title="About Me" color="#39ff39" />

    <div className="about-wrapper">
      <div className="about-left">
        <p>
          Howdy, I'm Shivam! I was born and raised in Uttar Pradesh, and am
          currently living in Mumbai. I currently working for the CornerStone
          OnDemand as Associate Frontend Engineer. I love to utilise my time in
          programming and gaming. The majority of my coding experience is based
          on JavaScript programming and its frameworks and libraries.
        </p>
        <div className="about-info-pr">
          <div>
            <p className="about-title">Things I Like.</p>
            <p className="likes-item">Games</p>
            <p className="likes-item">Making Notes</p>
            <p className="likes-item">Watching Series</p>
          </div>
          <div className="personal-info">
            <p>Birthday: 07-Aug-1996</p>
            <p>CellNo: +91-9818502046</p>
            <p>Mail: Shivamniet01@gmail.com</p>
            <p>Freelance : Available</p>
          </div>
        </div>
      </div>
      <div className="about-right">
        <img
          src={profile}
          border="0"
          alt="profile"
          height="400"
          width="400"
          className="profile"
        />
      </div>
    </div>
    <div className="button-wrapper">
      <a href={resume} download="Shivam_CV.pdf">
        <button className="button-style">Download CV</button>
      </a>
    </div>
  </motion.div>
);

export default About;
