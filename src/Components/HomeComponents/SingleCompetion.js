import React from 'react'
import classes from "./SingleCompetion.module.css"

const MainHomeCard = ({ logo, img, text, clases, color }) => {
    return (
        <div className={classes["main-home-card-container"]}>
            <div className={classes["main-home-card"]}>
                <div className={classes["card-logo"]}>
                    <div className={classes["logo-img"]}>
                        <a href="/">
                            <img src="https://media.limelight.com/images/Toppr-logo-color-256.png" alt="" />
                        </a>
                    </div>
                    <div className={classes["card-name"]}>
                        <p>{logo.name}</p>
                    </div>
                </div>

                <div className={classes["card-img"]}>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h2>{text.one}</h2>
                    <h2>{text.two}</h2>
                </div>
                <div className={classes.clases}>
                    {clases}
                </div>
                <div style={{ color: color }}>Explore </div>
            </div>
        </div>
    )
}

export default MainHomeCard
