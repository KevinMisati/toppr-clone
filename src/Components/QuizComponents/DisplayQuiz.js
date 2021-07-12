import React,{useState} from 'react'
import classes from "./DisplayQuiz.module.css"

const DisplayQuiz = ({ activeQuiz }) => {
    const [dispayButton,setDisplayButton] = useState(false)
    const quiz = activeQuiz[0]
    console.log(activeQuiz[0].answeroption)
    const handleClick = (e) => {
       
        if (e.target.textContent == quiz.correct_answer) {

            console.log(e.target.textContent)
            setDisplayButton(true)
        }
    }
    const handleNextClick = () => {
        
    }
    return (
        <div className={classes["display-quiz-container"]}>
        <div className={classes["display-quiz"]}>
            <h3>{quiz.question}</h3>
            <ul>
                {
                    quiz.answeroption.map((quiz) => {
                    return (
                        <li onClick={handleClick}>{quiz}</li>
                    )
                    })
                } 
                </ul>
                {dispayButton && <button onClick={handleNextClick}>Next</button>}
            </div>
        </div>
    )
}

export default DisplayQuiz
