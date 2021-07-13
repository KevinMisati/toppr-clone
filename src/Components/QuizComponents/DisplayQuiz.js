import React,{useState} from 'react'
import classes from "./DisplayQuiz.module.css"
 import {ButtonArrow}  from "../../Icons"

const DisplayQuiz = ({ activeQuiz, onIdSetter, onQuestionsOver }) => {
    const [dispayButton, setDisplayButton] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)
    const [showIsCorrectOrWrong, setShowIsCorrectOrWrong] = useState(false)
    const [fading,setIsFading] = useState(false)
    const quiz = activeQuiz[0]
    console.log(activeQuiz[0].answeroption)
    const handleClick = (e) => {
       
        if (e.target.textContent == quiz.correct_answer) {
            setTimeout(() => { (setIsFading(true)) }, 2000)
                setShowIsCorrectOrWrong(true)
            
            
            setIsCorrect(true)
            console.log(e.target.textContent)
            setDisplayButton(true)
        }
        else {
            setTimeout(() => { (setIsFading(true)) }, 2000)
            setShowIsCorrectOrWrong(true)
           
            setIsCorrect(true)
            console.log(e.target.textContent)
            setDisplayButton(true)
            setIsCorrect(false)
       }
    }
   
    const handleNextClick = () => {
       
        onIdSetter()
    }
    return (
        <div className={classes["display-quiz-container"]}>
        <div className={classes["display-quiz"]}>
                {showIsCorrectOrWrong && <p className={isCorrect ? classes.right : classes.wrong}>{isCorrect ? "Congratulations! you got it right." : "Please try again"}</p>}
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
                {dispayButton && <button className={classes["next-button"]} onClick={handleNextClick}>Next <ButtonArrow /></button>}
            </div> : 
        </div>
    )
}

export default DisplayQuiz
