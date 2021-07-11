import React from 'react'
import classes from "./MostAwarded.module.css"
import mostAwarded from '../data/MostAwarded'

const MostAwarded = () => {
    return (
        <div className={classes["most-awarded-container"]}>
            <h2>India's most awarded edtech platform</h2>
        <div className={classes["most-awarded"]}>
            {
                mostAwarded.map(({ img, title, desc }) => {
                    return (
                        <div className={classes["most-awarded-item"]}>
                            <div>
                                <img src={img} alt=""/>
                            </div>
                            <div className={classes.content}>
                                <p className={classes.name}>{title}</p>
                                <p className={classes.description}>{desc}</p>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            </div>
    )
}

export default MostAwarded
