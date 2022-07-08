import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/ProfileSide/ProfileSide'
import RightSide from '../../components/RightSide/RightSide'
import styles from "./home.module.css"

const Home = () => {
    return (
        <div className={styles.Home}>
            <ProfileSide />
            <PostSide />
            <RightSide />
        </div>
    )
}

export default Home
