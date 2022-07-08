import React from 'react'
import styles from "./profilecard.module.css"
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";

const ProfileCard = () => {
    return (
        <div className={styles.ProfileCard}>
            <div className={styles.ProfileImages}>
                <img className={styles.img1} src={Cover} alt="" />
                <img className={styles.img2} src={Profile} alt="" />
            </div>
            <div className={styles.ProfileName}>
                <span className={styles.name}>Zendaya MJ</span>
                <span>Senior UI/UX Designer</span>
            </div>
            <div className={styles.followStatus}>
                <hr className={styles.followStatusHr} />
                <div className={styles.followers_following}>
                    <div className={styles.follow}>
                        <span className={styles.span1}>6,890</span>
                        <span className={styles.span2}>Followings</span>
                    </div>
                    <div className={styles.vl}></div>
                    <div className={styles.follow}>
                        <span className={styles.span1}>1</span>
                        <span className={styles.span2}>Followers</span>
                    </div>
                </div>
                <hr className={styles.followStatusHr} />
            </div>
            <span className={styles.myProfile}>
                MyProfile
            </span>
        </div>
    )
}

export default ProfileCard
