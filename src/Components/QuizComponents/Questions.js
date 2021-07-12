import React,{useEffect} from 'react'
import classes from "./Questions.module.css"
import DispalyQuiz from "./DisplayQuiz"
const dummy_quiz = [
    {
        "id": 2,
        "question": "Which Indian state produces GI certified Jardalu mangoes, which were recently exported to the UK?",
        "option1": "Bihar",
        "option2": "Maharashtra",
        "option3": "Andhra Pradesh",
        "option4": "Uttar Pradesh",
        "correct_answer": "Bihar",
        "subject": "Gk",
        "topic": "Current Affairs",
        "explanation": "The first commercial consignment of GI-certified Jardalu mangoes from Bhagalpur, Bihar was exported to the United Kingdom. APEDA, in collaboration with Bihar government, Indian High Commission",
        "video": ".",
        "answeroption": ['Bihar','Maharashtra','Andhra Pradesh','Uttar Pradesh']
    },
    {
        "id": 1,
        "question": "The National Maritime Heritage Complex is to be developed in which state?",
        "option1": "Maharashtra",
        "option2": "Gujarat",
        "option3": "Tamilnadu",
        "option4": "Kerala",
        "correct_answer": "Gujarat",
        "subject": "Gk",
        "topic": "Current Affairs",
        "explanation": "The Ministry of Culture and Ministry of Ports, Shipping and Waterways signed a Memorandum of Understanding (MoU) for ‘Cooperation in Development of National Maritime Heritage Complex (NMHC) at Lothal, Gujarat’",
        "video": ".",
        "answeroption": ["Maharashtra", "Gujarat", 'Tamil Nadu', 'Kerala']
    }
]


const Questions = () => {
  /*   const fetchData = async () => {
        try {
            const res = await fetch("https://pure-beach-79386.herokuapp.com/mcq/?fbclid=IwAR0HOYSQb5zSqNEmCie95VUMbaAEu-51rR3agGYEGcQN7hy8Ctfi8vXw3AY.json")
            
            console.log(res)
            const respnseData = await res.json()
            console.log("hello")
            console.log(respnseData)
        }
        catch(err){
            console.log(err, "catch")
        }
    } 
    useEffect(() => {
        fetchData()

        
    }, [])*/

    const activeQuiz = dummy_quiz.filter(quiz => quiz.id == 1)
    console.log(activeQuiz)
    return (
        <div className={classes.Questions}>
            
            <h1>{activeQuiz.question}</h1>
           <DispalyQuiz activeQuiz={activeQuiz} />
        </div>
    )
}

export default Questions
