import React from "react";
import styles from "./profile.module.css";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import PostSide from "../../components/PostSide/PostSide";
import RightSide from "../../components/RightSide/RightSide";
const Profile = () => {
  return (
    <div className={styles.Profile}>
      <ProfileLeft />
      <div className={styles.Profile_center}>
        <ProfileCard location="profilePage" />
        <PostSide />
      </div>
      <RightSide />
    </div>
  );
};

export default Profile;
