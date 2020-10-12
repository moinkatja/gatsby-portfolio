import React from 'react';
import classes from "./Projects.module.css";
import project01 from "../../images/project_open_air_kino.png";

function Projects() {
    return (
        <section id="projects" className={classes.projects}>
            <h1>My projects</h1>
            <article className={classes.project_description_article}>
                <h2>Open Air Kino (React App)</h2>
                <img src={project01} className={classes.project_screenshot} alt="Open Air Kino Project" />
                <p className={classes.project_technologies_p}><strong>Technologies used:</strong>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>HTML5 & CSS3</li>
                    <li>MongoDB</li>
                    <li>NodeJS & Express</li>
                </p>
                <p className={classes.project_description_p}>
                    This React-App helps to find information about the outdoor cinemas in Germany. 
                    <br/>
                    You can view cinema details, filter cinemas depending on the region, add/remove cinemas to/from favorites.
                    For this project I used:
                <br /><br />
                    <li>Create-react-app</li>
                    <li>MongoDB and NodeJS for a database and an API (deployed with Heroku)</li>
                    <li>Fetch API to get cinemas data </li>
                    <li>Session storage for saving the favorites </li>
                    <li> Dynamical dropdown with regions (depending on the data in the database) </li>
                    <li> React Router to correctly show cinemas and favorites depending on the route in the browser address field </li>
                    <li> If the backend is not avaliable, sample data will be shown</li>
                    <li>CSS Grid, Flexbox and CSS-modules for styling </li>
                    <li>Jest for tests </li>
                </p>
                <p className={classes.project_links}>
                    <a href="https://moinkatja.github.io/open-air-kino" target="_blank"  rel="noreferrer" >Live Demo</a>  
                    <a href="https://github.com/moinkatja/open-air-kino" target="_blank"  rel="noreferrer" >GitHub</a>
                </p>
            </article>
        </section>
    )
}

export default Projects
