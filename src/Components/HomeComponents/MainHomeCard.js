import React from 'react'
import classes from "./MainHomeCard.module.css"

const MainHomeCard = ({ logo, img, text, clases, color}) => {
    return (
        <div className={classes["main-home-card-container"]}>
            <div className={classes["main-home-card"]}>
            <div className={classes["card-logo"]}>
                    <div className={classes["logo-img"]}>
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Toppr_logo.png" alt="" />
                        </a>
                    </div>
                    <div className={classes["card-name"]}>
                        <p>{logo.name}</p>
                    </div>
                </div>
                
                <div classNmae={classes["card-img"]}>
                    <img src={img} alt=""/>
                </div>
                <div className={classes.headings}>
                    <h2>{text.one}</h2>
                    <h2 style={{}}>{text.two}</h2>
                </div>
                <div className={classes.clases}>
                    {clases}
                </div>
                <div style={{color:color}}>Explore </div>
            </div>
        </div>
    )
}

export default MainHomeCard
