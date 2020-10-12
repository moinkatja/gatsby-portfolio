import React, { Fragment } from "react";
import Navigation from "../components/Navigation/Navigation";
import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills/Skills";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import "./index.css";

function Home() {
  return (
    <Fragment>
      <Navigation />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Fragment>
  )
}

export default Home;


