import styles from "./posts.module.css";
import Post from "../Post/SinglePost";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getTimelinePosts } from "../../actions/postAction";

const Posts = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const { posts, loading } = useSelector((state) => state.postReducer);

  useEffect(() => {
    getTimelinePosts(user._id);
  }, [user._id]);
  return (
    <div className={styles.Posts}>
      {loading
        ? "Fetching posts..."
        : posts.map((post, index) => {
            return <Post data={post} key={index} />;
          })}
    </div>
  );
};

export default Posts;
