import React from 'react'
import Competitive from "../../data/Competitive"
import SingleCompetion from "./SingleCompetion"
import classes from "./Competitive.module.css"

const CompetitivePlans = () => {
    return (
        <div className={classes["competitive-plans-container"]}>
            <h1>Our plans for competitive exams</h1>
        <div className={classes["competitive-plans"]}>
            {Competitive.map(({ logo, img, text, clases, color }) => {
                return (<SingleCompetion
                    logo={logo}
                    img={img}
                    text={text}
                    clases={clases}
                    color={color}
                />
                )

            })
            }
            </div>
        </div>
    )
}

export default CompetitivePlans
