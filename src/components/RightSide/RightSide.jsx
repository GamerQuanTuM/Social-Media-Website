import React, { useState } from 'react'
import styles from "./rightside.module.css"
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from '../TrendCard/TrendCard';
import ShareModal from "../ShareModal/ShareModal"


const RightSide = () => {
    const [modalOpened, setModalOpened] = useState(false);
    return (
        <div className={styles.RightSide}>
            <div className={styles.navIcons}>
                <img className={styles.navIcons_img} src={Home} alt="" />
                <UilSetting />
                <img className={styles.navIcons_img} src={Noti} alt="" />
                <img className={styles.navIcons_img} src={Comment} alt="" />
            </div>
            <TrendCard />
            <button className={`button ${styles.r_button}`} onClick={() => setModalOpened(true)}
            >
                Share
            </button>
            <ShareModal
                modalOpened={modalOpened}
                setModalOpened={setModalOpened}
            />
        </div>
    )
}

export default RightSide
