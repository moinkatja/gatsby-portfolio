import React from 'react';
import classes from "./Contact.module.css";
import { FaXing, FaGithub, FaEnvelope, FaFilePdf } from 'react-icons/fa';
import CV_de from "../../files/CV_de.pdf";

function Contact() {
    
    return (
        <section id="contact" className={classes.contact}>
            <h1>Get in touch</h1>
            <p>If you have any questions or offers just contact me. </p>
            <p className={classes.contact_links}>
                <a href="https://www.xing.com/profile/Ekaterina_Blau/cv" target="_blank" rel="noreferrer" aria-label="Xing"><FaXing size="50" /></a>
                <a href="https://github.com/moinkatja" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub size="50" /></a>
                <a href="mailto:katja.blau@gmx.de" aria-label="E-Mail"><FaEnvelope size="50" /></a>
                <a href={CV_de}  aria-label="CV" download><FaFilePdf size="50"/></a></p>
        </section>
    )
}

export default Contact
