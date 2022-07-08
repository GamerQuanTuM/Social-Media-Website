import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import styles from "./postshare.module.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";


const PostShare = () => {
    const [image, setImage] = useState(null);
    const imageRef = useRef();

    const onImageChange = (event) => {
        if (event.target.files) {
            let img = event.target.files[0];
            console.log(event.target);
            setImage({
                image: URL.createObjectURL(img),
            });
        }
    };
    return (
        <div className={styles.PostShare}>
            <img className={styles.PostShare_img} src={ProfileImage} alt="" />
            <div className={styles.PostShare_div}>
                <input className={styles.PostShare_div_input} type="text" placeholder="What's happening" />
                <div className={styles.postOptions}>
                    <div className={styles.option} style={{ color: "var(--photo)" }}
                        onClick={() => imageRef.current.click()}
                    >
                        <UilScenery />
                        Photo
                    </div>
                    <div className={styles.option} style={{ color: "var(--video)" }}>
                        <UilPlayCircle />
                        Video
                    </div>{" "}
                    <div className={styles.option} style={{ color: "var(--location)" }}>
                        <UilLocationPoint />
                        Location
                    </div>{" "}
                    <div className={styles.option} style={{ color: "var(--shedule)" }}>
                        <UilSchedule />
                        Shedule
                    </div>
                    <button className={`button ${styles.ps_button}`}>Share</button>
                    <div style={{ display: "none" }}>
                        <input
                            type="file"
                            name="myImage"
                            ref={imageRef}
                            onChange={onImageChange}
                        />
                    </div>
                </div>
                {image && (

                    <div className={styles.previewImage}>
                        <UilTimes className={styles.previewImage_svg} onClick={() => setImage(null)} />
                        <img className={styles.previewImage_img} src={image.image} alt="" />
                    </div>

                )}


            </div>
        </div>
    );
};

export default PostShare;