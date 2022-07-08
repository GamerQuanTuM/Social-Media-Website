import React from 'react'
import styles from "./rightside.module.css"
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from '../TrendCard/TrendCard';


const RightSide = () => {
    return (
        <div className={styles.RightSide}>
            <div className={styles.navIcons}>
                <img className={styles.navIcons_img} src={Home} alt="" />
                <UilSetting />
                <img className={styles.navIcons_img} src={Noti} alt="" />
                <img className={styles.navIcons_img} src={Comment} alt="" />
            </div>
            <TrendCard />
            <button className={`button ${styles.r_button}`}>
                Share
            </button>
        </div>
    )
}

export default RightSide
