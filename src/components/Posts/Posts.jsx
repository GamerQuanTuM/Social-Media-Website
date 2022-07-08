import styles from './posts.module.css'
import { PostsData } from "../../Data/PostsData"
import Post from '../Post/SinglePost'

const Posts = () => {
    return (
        <div className={styles.Posts}>
            {PostsData.map((post, index) => {
                return <Post data={post} key={index} />
            })}
        </div>
    )
}

export default Posts
