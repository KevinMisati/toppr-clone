import React from 'react'
import HomeHeader from "../Components/HomeComponents/HomeHeader"
import MainHome from "../Components/HomeComponents/MainHome"
import CompetitivePlans from "../Components/HomeComponents/CompetitivePlans"
import MostAwarded from "../Components/HomeComponents/MostAwarded"
import BoardsSection from "../Components/HomeComponents/BoadsSection"
import AppAd from '../Components/HomeComponents/AppAd'
import Booking from '../Components/HomeComponents/Booking'


const Home = () => {
    return (
        <div>
            <div>
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
