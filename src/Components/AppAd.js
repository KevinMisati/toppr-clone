import React from 'react'
import classes from "./AppAd.module.css"

const AppAd = () => {
    return (
        <div className={classes["app-ad"]}>
            <div className={classes.info}>
                <h1>Toppr app is available on</h1>
                <h1 className={classes.blue}>all platforms</h1>
                <ul>
                    <li>
                        <img src="https://static-cf.toppr.com/marketing/9783b4b/images/home/mobile-g.png" alt="" />
                        <h3>Mobiles</h3>
                        <p>IOS {"&"} Android</p>
                    </li>
                    <li>
                        <img src="https://static-cf.toppr.com/marketing/9783b4b/images/home/tablet.png" alt="" />
                        <h3>Tablets</h3>
                        <p>Android {"&"} Ipad</p>
                    </li>
                    <li>
                        <img src="https://static-cf.toppr.com/marketing/9783b4b/images/home/Laptop.png" alt="" />
                        <h3>Desktops</h3>
                        <p>All Browsers</p>
                    </li>
                </ul>
                <div className={classes["apps-logos"]}>
                    <div>
                       
                            <img src="https://static-cf.toppr.com/marketing/9783b4b/images/home/app-links/play-store.png" alt="" />
                       
                    </div>
                    <div>
                        <img src="https://static-cf.toppr.com/marketing/9783b4b/images/home/app-links/brand-apple.png" alt=""/>
                    </div>
                </div>
            </div>
            <div className={classes.img}>
                <img src="https://static-cf.toppr.com/marketing/9783b4b/images/home/tablet-and-phone-mock-for-grukhs.png" alt=""/>
            </div>
            
        </div>
    )
}

export default AppAd
