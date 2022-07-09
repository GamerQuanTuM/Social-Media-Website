import styles from "./auth.module.css"
import Logo from "../../img/logo.png";

const Auth = () => {
    return (
        <div className={styles.Auth}>
            <div className={styles.a_left}>
                <img className={styles.a_left_img} src={Logo} alt="" />
                <div className={styles.Webname}>
                    <h1 className={styles.Webname_h1}>ZKC Media</h1>
                    <h6 className={styles.Webname_h6}>Explore the ideas throughout the World</h6>
                </div>
            </div>
            <SignUp />
        </div>
    )
}

function SignUp() {
    return (
        <div className={styles.a_right}>
            <form className={`${styles.infoForm} ${styles.authForm}`}>
                <h3>Sign Up</h3>

                <div className={styles.infoForm_div}>
                    <input type="text" placeholder="First Name" className={styles.infoInput} name='firstname' />

                </div>
                <div className={styles.infoForm_div}>
                    <input type="text" className={styles.infoInput} name='username' placeholder="Username" />
                </div>
                <div className={styles.infoForm_div}>
                    <input type="text" className={styles.infoInput} name="password" placeholder="Password" />
                    <input type="text" className={styles.infoInput} name="confirmPassword" placeholder="Confirm Password" />
                </div>

                <div>
                    <span style={{fontSize:"12px",position:"relative",right:"14px"}}>Already have an Account Login!</span>
                </div>
                <button type="submit" className={`button ${styles.infoButton}`}>Signup</button>
            </form>
        </div>
    )
}
function LogIn() {
    return (
        <div className={styles.a_right}>
            <form style={{width:"300px"}} className={`${styles.infoForm} ${styles.authForm}`}>
                <h3>Log In</h3>
                <div className={styles.infoForm_div}>
                    <input type="text" className={styles.infoInput} name='username' placeholder="Username" />
                </div>
                <div className={styles.infoForm_div}>
                    <input type="text" className={styles.infoInput} name="password" placeholder="Password" />
                </div>

                <div>
                    <span style={{fontSize:"12px",position:"relative",right:"60px"}}>Dont have an Account SignUp!</span>
                </div>
                <button style={{position:"relative",
                bottom:"60px"}} type="submit" className={`button ${styles.infoButton}`}>Login</button>
            </form>
        </div>
    )
}

export default Auth
