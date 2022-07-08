import PostShare from "../PostShare/PostShare"
import styles from "./postside.module.css"

const PostSide = () => {
    return (
        <div className={styles.PostSide}>
            <PostShare/>
        </div>
    )
}

export default PostSide
