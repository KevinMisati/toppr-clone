import React from 'react'
import classes from "./Header.module.css"
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <section className={classes["header-container"]}>
            <header className={classes.header}>
                <nav>
                    <ul className="_219lr">
                        <li href="">
                            <img  src="//static-cf.toppr.com/marketing/9783b4b/images/homeIcon.svg" alt="home-icon" />
                        </li>
                        <li >
                            <Link to="/quiz">QUIZ</Link>
                        </li>
                        <li >
                            <a href="/">LEARNING APP</a>
                        </li>
                        <li >
                            <a href="/">ANSWR</a>
                        </li>
                        <li >
                            <a href="/">CODR</a>
                        </li>
                        <li >
                            <a href="/">SCHOOL OS</a>
                        </li>
                        <li >
                            <a href="/">STAR</a>
                        </li>
                    </ul>
                </nav>

         
        </header>
        </section>
    )
}

export default Header
