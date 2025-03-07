import React from "react";
import Header from "../components/element/Header.js";
import Hero from "../components/Hero";
import About from "../components/About";
import Experienced from "../components/Experienced.js";
import Skill from "../components/Skill.js";
import PortfolioWork from "../components/PortfolioWork.js";
import Contact from "../components/Contact.js";
import Footer from "../components/element/Footer.js";
import Blog from "../components/Blog.js";

export default function Home() {
  return (
    <div className="content">
      {/* <Header></Header> */}
      <Hero></Hero>
      <About></About>
      <Experienced></Experienced>
      <PortfolioWork></PortfolioWork>
      <Skill></Skill>
      <Blog />

    </div>
  );
}
