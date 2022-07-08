import styles from './followerscard.module.css'
import { Followers } from '../../Data/FollowersData'


const FollowersCard = () => {
    return (
        <div className={styles.FollowersCard}>
            <h3>Who is following you</h3>

            {Followers.map((follower, index) => {
                return (
                    <div key={index} className={styles.follower}>
                        <div className={styles.follower_div}>
                            <img src={follower.img} alt="" className={styles.followerImage} />
                            <div className={styles.name}>
                                <span className={styles.span1}>{follower.name}</span>
                                <span>@{follower.username}</span>
                            </div>
                        </div>
                        <button className={`button ${styles.fc_button}`}>
                            Follow
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default FollowersCard