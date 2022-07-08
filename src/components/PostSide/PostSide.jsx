import Posts from "../Posts/Posts"
import PostShare from "../PostShare/PostShare"
import styles from "./postside.module.css"

const PostSide = () => {
    return (
        <div className={styles.PostSide}>
            <PostShare/>
            <Posts/>
        </div>
    )
}

export default PostSide
