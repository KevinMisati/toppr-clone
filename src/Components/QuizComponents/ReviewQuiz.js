import React from 'react'
import classes from "./ReviewQuiz.module.css"
import Quiz from '../../Pages/Quiz'

const ReviewQuiz = ({ quiz,correctAns }) => {
    console.log(correctAns)
    return (
        <div className={classes["review-container"]}>
            <div className={classes.review}>
                <div className={classes.heading}>
            <h2 >You successfully completed the questions</h2>
            
            <h3>You scored {correctAns} out of {quiz.length}</h3>
                </div>
           
            {quiz.map((q) => {
                return (
                    <>
                        <div className={classes.question}>
                            <h4 >{q.number}. {q.question}</h4>
                            <p>{q.explanation}</p>
                    </div>
                    </>
                )
            })}
            </div>
        </div>
    )
}

export default ReviewQuiz
