import React from 'react'
import classes from "./BoardsSection.module.css"
import {ButtonArrow} from "../../src/Icons" 
const BoadsSection = () => {
    return (
        <div className={classes["boards-section"]}>
            <div className={classes["section-one"]}>
                <div className={classes["heading-mobile"]}>
                    <p>Built for all boards and exams with </p>
                    <p> <span className={classes.blue}>widest syllabus</span>  coverage </p>
                </div>
                <div className={classes.heading}>
                    <p>Built for all boards </p>
                    <p>and exams with </p>
                    <p className={classes.blue}>widest syllabus </p>
                    <p> coverage</p>
                </div>
                <div className={classes.desc}>
                    <h3 className={classes["desc-title"]}>
                        Your learning needs are unique and we do everything to ensure that they are met
                    </h3>
                    <p className={classes["desc-info"]}>
                        Students can chart their own path by creating customised syllabus that helps them attain their learning goals. With over 120,000 syllabus combinations at their disposal to choose from, learning was never so easy.
                    </p>
                </div>
                </div>
            <div className={classes["section-two"]}></div>
                <div className={classes["section-three"]}>
                    <div>
                        <p className={classes["header-p"]}>22 Boards</p>
                        <p className={classes.info}>Toppr caters to students across the country from all major boards including CBSE, ICSE, IGCSE and state boards like Maharashtra, Karnataka, Madhya Pradesh, Rajasthan, UP, West Bengal and many others.</p>
                    </div>
                    <div>
                    <p className={classes["header-p"]}>58 Exams</p>
                    <p className={classes.info}>Students have different goals and aspirations. Toppr covers all major competitive exams like JEE, NEET, CA Foundation, and Olympiads and Scholarship Exams like IMO, NTSE, KVPY etc, for their better learning.</p>
                    </div>
                    <div>
                    <p className={classes["header-p"]}>17 Subjects</p>
                    <p className={classes.info}>Every subject plays an important role in the curriculum. Toppr covers all other major subjects and serves schools as a one-stop destination for learning. This wide availability of subjects makes Toppr unique.</p>
                    </div>
            </div>
                <div className={classes["section-four"]}>
                    <button>Get started <ButtonArrow /></button>
            </div>
            </div>
          
    )
}

export default BoadsSection
