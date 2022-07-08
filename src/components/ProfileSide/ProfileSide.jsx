import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import styles from "./profileside.module.css"

const ProfileSide = () => {
    return (
        <div className={styles.ProfileSide}>
            <LogoSearch />
            <ProfileCard />
            <FollowersCard />
        </div>
    )
}

export default ProfileSide
