import React from 'react'
import classes from "./HomeHeader.module.css"
import Button from "../../UI/Button"

const HomeHeader = () => {
    return (
        <div className={classes["home-header-container"]}>
            <div className={classes["home-header"]}>
                <div className={classes.logo}>
                    <a href="/">
                        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Toppr_logo.png" alt=""/> */}
                        <img src="https://media.limelight.com/images/Toppr-logo-color-256.png" alt=""/>
                    </a>
                </div>
                <div className={classes["btn-group"]}>
                    <Button name="login" />
                    <Button name="sign Up" />
                </div>
            </div>
        </div>
    )
}

export default HomeHeader
