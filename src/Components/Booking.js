import React from 'react'
import classes from './Booking.module.css'
import {ButtonArrow} from "../../src/Icons"

const Booking = () => {
    return (
        <div className={classes["booking-container"]}>
        <div className={classes.booking}>
            <div className={classes.info}>
                <h1>Book a free online </h1>
                <h1> counselling session</h1>
                <p>Have any questions? An experienced Toppr Agent will be able to answer any questions you have and discuss academic goals as well as the unique needs of the learner.</p>
                <div>
                    <span>
                        <button>book demo <ButtonArrow /></button>
                    </span>
                        <span>
                            <button className={classes.subscribe}>subscribe now</button>
                    </span>
                </div>
            </div>
            <div className={classes.img}>
                <img src="https://static-cf.toppr.com/marketing/9783b4b/images/home/boy-with-tablet.png" alt=""/>
            </div>
            </div>
            </div>
    )
}

export default Booking
