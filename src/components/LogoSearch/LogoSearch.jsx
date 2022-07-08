import React from 'react'
import Logo from "../../img/logo.png"
import {UilSearch} from "@iconscout/react-unicons"
import styles from "./logosearch.module.css"

const LogoSearch = () => {
    return (
        <div>
            <div className={styles.LogoSearch}>
                <img src={Logo} alt="" />
                <div className={styles.Search}>
                    <input type="text" placeholder='#Explore'/>
                    <div className={styles.sicon}>
                        <UilSearch/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogoSearch
