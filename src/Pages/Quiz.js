import React from 'react'
import classes from "./Quiz.module.css"
import Questions from "../Components/QuizComponents/Questions"

const Quiz = () => {
    return (
        <div className={classes["quiz-container"]}>
            <div className={classes.quiz}>
                <Questions />
            </div>
        </div>
    )
}

export default Quiz
