import { Modal, useMantineTheme } from "@mantine/core";

import styles from  "./profilemodal.module.css"


function ProfileModal({ modalOpened, setModalOpened }) {
    const theme = useMantineTheme();

    return (
        <Modal
            overlayColor={
                theme.colorScheme === "dark"
                    ? theme.colors.dark[9]
                    : theme.colors.gray[2]
            }
            overlayOpacity={0.55}
            overlayBlur={3}
            size="55%"
            opened={modalOpened}
            onClose={() => setModalOpened(false)}
        >
            <form className={styles.infoForm}>
                <h3>Your info</h3>

                <div className={styles.infoForm_div}>
                    <input
                        type="text"
                        className={styles.infoInput}
                        name="FirstName"
                        placeholder="First Name"
                    />

                    <input
                        type="text"
                        className={styles.infoInput}
                        name="LastName"
                        placeholder="Last Name"
                    />
                </div>

                <div className={styles.infoForm_div}>
                    <input
                        type="text"
                        className={styles.infoInput}
                        name="worksAT"
                        placeholder="Works at"
                    />
                </div>

                <div className={styles.infoForm_div}>
                    <input
                        type="text"
                        className={styles.infoInput}
                        name="livesIN"
                        placeholder="Lives in"
                    />

                    <input
                        type="text"
                        className={styles.infoInput}
                        name="Country"
                        placeholder="Country"
                    />
                </div>

                <div className={styles.infoForm_div}>
                    <input
                        type="text"
                        className={styles.infoInput}
                        placeholder="RelationShip Status"
                    />
                </div>


                <div className={styles.infoForm_div}>
                    Profile Image
                    <input type="file" name='profileImg' />
                    Cover Image
                    <input type="file" name="coverImg" />
                </div>

                <button className={`button ${styles.infoButton}`}>Update</button>
            </form>
        </Modal>
    );
}

export default ProfileModal;