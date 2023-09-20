import React from "react";
import { motion } from "framer-motion";
import openHand from "../../../../open.png";

import { tabContentVariant } from "../../../../utils";
import Title from "../../../../shared/components/Title/Title";
import ProgressBar from "../../../../shared/components/ProgressBar/Progressbar";

const Skills = ({ id, active }) => (
  <motion.div
    role="tabpanel"
    id={id}
    className="tab-content"
    variants={tabContentVariant}
    animate={active ? "active" : "inactive"}
    initial="inactive"
  >
    <Title title="Skills" color="#39a4ff" />
    <div className="open-hand">
      <img src={openHand} alt="open" height="600" />
    </div>
    <div className="skill-wrapper">
      <div className="front-end">
        <ProgressBar name="Html" percentage="80" />
        <ProgressBar name="Css/Less" percentage="85" />
        <ProgressBar name="ReactJs" percentage="85" />
        <ProgressBar name="Angular2+" percentage="70" />
      </div>
      <div className="backend">
        <ProgressBar name="JavaScript" percentage="70" />
        <ProgressBar name="NodeJs/Express" percentage="60" />
        <ProgressBar name="Apache(e-chart)" percentage="85" />
        <ProgressBar name="MapBox/Here Map" percentage="60" />
      </div>
    </div>
  </motion.div>
);

export default Skills;
