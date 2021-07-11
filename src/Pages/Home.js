import React from 'react'
import classes from "./Home.module.css"
import HomeHeader from "../Components/HomeHeader"
import MainHome from "../Components/MainHome"
import CompetitivePlans from "../Components/CompetitivePlans"
import MostAwarded from "../Components/MostAwarded"
import BoardsSection from "../Components/BoadsSection"
import AppAd from '../Components/AppAd'
import Booking from '../Components/Booking'


const Home = () => {
    return (
        <div className={classes["home-container"]}>
            <div className={classes.home}>
                <HomeHeader />
                <MainHome />
                <CompetitivePlans />
                <MostAwarded />
                <BoardsSection />
                <AppAd />
                <Booking />
            </div>
        </div>
    )
}

export default Home
