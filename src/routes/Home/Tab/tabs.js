import React from "react";
import { BoyIcon, AboutIcon, SkillIcon, ContactIcon } from "../../../shared/Icons"
// import TabContent from "./TabContent";
import Me from "./components/me"
import Skills from "./components/skills"
import Contact from "./components/contact"
import About from "./components/About"


// Configure our tabs and tab content here
const tabs = [
    {
        title: "Home",
        id: "home",
        icon: <BoyIcon />,
        color: "#5d5dff",
        bgColor: "linear-gradient(-206deg, black 0%, rgb(45, 45, 77) 100%)",
        content: Me
    },
    {
        title: "About Me",
        id: "about",
        icon: <AboutIcon />,
        color: "#67bb67",
        bgColor: "linear-gradient(-206deg, black 0%, rgb(31,47,39) 100%)",
        content: About
    },
    {
        title: "Skills",
        id: "skills",
        icon: <SkillIcon />,
        color: "#63a7c7",
        bgColor: "linear-gradient(-206deg, black 0%, rgb(31,44,59) 100%)",
        content: Skills
    },
    {
        title: "Contact Me",
        id: "contact",
        icon: <ContactIcon />,
        color: "#f56868",
        bgColor: "linear-gradient(-206deg, black 0%, rgb(61,33,41) 100%)",
        content: Contact
    }
];

export default tabs;
