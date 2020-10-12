import React from 'react';
import classes from "./Navigation.module.css";
import { AnchorLink } from "gatsby-plugin-anchor-links";

function Navigation() {
    return (
        <nav className={classes.nav}>
            <AnchorLink to="/#home" title="Home"><li>Home</li></AnchorLink>
            <AnchorLink to="/#about" title="About"><li>About me</li></AnchorLink>
            <AnchorLink to="/#projects" title="Projects"><li>Projects</li></AnchorLink>
            <AnchorLink to="/#contact" title="Contact"><li>Contact</li></AnchorLink>
        </nav>
    )
}

export default Navigation
