import styles from "./profileleft.module.css"
import LogoSearch from "../LogoSearch/LogoSearch"
import FollowersCard from "../../components/FollowersCard/FollowersCard"
import InfoCard from "../InfoCard/InfoCard"

import React from 'react'

const ProfileLeft = () => {
    return (
        <div className={styles.ProfileSide}>
            <LogoSearch />
            <InfoCard />
            <FollowersCard />
        </div>
    )
}

export default ProfileLeft
