import React from 'react';
import classes from "./Hero.module.css";
import Foto from "../../images/foto_bw.jpg";
import Fade from 'react-reveal/Fade';
import { AnchorLink } from "gatsby-plugin-anchor-links";

function Hero() {

    function sendEmail() {
        window.location = "mailto:katja.blau@gmx.de";
    }

    return (
        <section id="home" className={classes.hero}>
            <Fade left duration={1000} delay={500} distance="20px">
                <h1>Moin! I'm <span className={classes.hero_name}>Katja Blau</span></h1>
            </Fade>
            <img className={classes.hero_img} src={Foto} alt="Katja Blau" />
            <br />
            <Fade  bottom duration={1000} delay={1000} distance="20px">
                <h2>Frontend Web Developer</h2>
            </Fade>
            <article className={classes.hero_buttons}>
                <button className={classes.contact_button} onClick={sendEmail}>E-mail</button> <AnchorLink to="/#projects" title="Home"><button className={classes.contact_button}>Projects</button></AnchorLink>
            </article>
        </section>
    )
}

export default Hero
