import React from 'react';
import classes from "./About.module.css";

function About() {
    return (
        <section  id="about" className={classes.about}>
            <h1>About me</h1>
            <p>
            My name is Katja and I am a frontend web developer based near Hamburg, Germany.
            <br/><br/>
            I'm mostly interested in React and I really like the idea of this library. The whole component-based approach seems fascinating to me. I also build modern websites using HTML, CSS and JavaScript. 
            The most important aspects in my opinion are user experience, accessibility and performance.
            Feel free to have a look at my <a href={"cv_de.pdf"} download>CV</a>.
            <br/><br/>
            I'm also interested in business analytics and some modern trends like gamification.
            <br/><br/>
            My hobbies are playing tennis, travelling and learning new things.
            <br/><br/>
            At the moment I'm looking for a job. Feel free to <a href="mailto:katja.blau@gmx.de">get in touch</a> with me :)
            </p>
        </section>
    )
}

export default About
