import React from 'react'
import classes from "./MainHome.module.css"
import MainHomeCard from "./MainHomeCard"
import CardsData from "../../data/CardsData"


const MainHome = () => {
    return (
        <div className={classes["main-home-container"]}>
            <div className={classes["main-home"]}>
                <div className={classes.heading}>
                    <h1 >Better Learning. Better Results.</h1>
                    <h1 className={classes["second-heading"]}>One platform for all your learning needs</h1>
                </div>
                <div className={classes.cards}>
                    {CardsData.map(({ logo, img, text, clases, color })  => {
                    return ( <MainHomeCard
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
        </div>
    )
}

export default MainHome
