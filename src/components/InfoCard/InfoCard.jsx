import React, { useState } from "react";
import styles from "./infocard.module.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal/ProfileModal";

const InfoCard = () => {
    const [modalOpened, setModalOpened] = useState(false);
    return (
        <div className={styles.InfoCard}>
            <div className={styles.infoHead}>
                <h4>Your Info</h4>
                <div className={styles.infoHead_div}>
                    <UilPen
                        width="2rem"
                        height="1.2rem"
                        onClick={() => setModalOpened(true)}
                    />
                    <ProfileModal
                        modalOpened={modalOpened}
                        setModalOpened={setModalOpened}
                    />
                </div>
            </div>

            <div className={styles.info}>
                <span>
                    <b>Status </b>
                </span>
                <span>in Relationship</span>
            </div>

            <div className={styles.info}>
                <span>
                    <b>Lives in </b>
                </span>
                <span>Seoul</span>
            </div>

            <div className={styles.info}>
                <span>
                    <b>Singer at </b>
                </span>
                <span>Twice</span>
            </div>

            <button className={`button ${styles.logout_button}`}>
                Logout
            </button>
        </div>
    );
};

export default InfoCard;

