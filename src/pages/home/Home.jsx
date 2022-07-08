import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/ProfileSide/ProfileSide'
import styles from "./home.module.css"

const Home = () => {
    return (
        <div className={styles.Home}>
            <ProfileSide />
            <PostSide />
            <div className='rightSide'>Right</div>
        </div>
    )
}

export default Home
