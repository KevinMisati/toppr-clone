import React,{useState} from 'react'
import classes from "./DisplayQuiz.module.css"
 import {ButtonArrow}  from "../../Icons"

const DisplayQuiz = ({ activeQuiz, onIdSetter, onQuestionsOver }) => {
    const [dispayButton, setDisplayButton] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)
    const [background, setBackground] = useState("#d9e8f7")
    const [backgroundB4submit,setBackgroundB4Submit] =useState(true)
    const [correctAnswers,setCorrectAnswes] =useState(0)
    const [showIsCorrectOrWrong, setShowIsCorrectOrWrong] = useState(false)
    const [fading,setIsFading] = useState(false)
    const [userInput,setUserInput] = useState("")
    const quiz = activeQuiz[0]
   
    const handleClick = (e) => {
        const list = document.querySelectorAll(".list")
        setUserInput("")
        for (let i = 0; i < list.length; i++) {
            list[i].style.background = "#d9e8f7"
        }
        setDisplayButton(true)
    
        setUserInput(e.target.textContent)
       
        e.target.style.background = "#95D6A2";
        if (userInput == quiz.correct_answer) {
            setCorrectAnswes(prev => prev + 1)
            
         }
        
    }
  
   
    const handleNextClick = () => {
        setShowIsCorrectOrWrong(false)
        setBackground("#d9e8f7")
        onIdSetter(correctAnswers)
        const list = document.querySelectorAll(".list")
        console.log(list)
        for (let i = 0; i < list.length; i++){
            list[i].style.background = "#d9e8f7"
        }
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
                        <li className="list"  style={{ background:""}} onClick={handleClick}>{quiz}</li>
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
