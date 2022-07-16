import styles from "./auth.module.css"
import Logo from "../../img/logo.png";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { logIn, signUp } from "../../actions/AuthAction";

const Auth = () => {

    const dispatch = useDispatch()

    const loading = useSelector((state) => state.authReducer.loading)
    const [isSignUp, setIsSignUp] = useState(false);
    console.log(loading);
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        confirmPassword: ""
    })

    const [confirmPass, setConfirmPass] = useState(true)

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isSignUp) {
            data.password === data.confirmPassword ? dispatch(signUp(data)) : setConfirmPass(false)
        } else {
            dispatch(logIn(data))
        }
    }

    const resetForm = () => {
        setConfirmPass(true);
        setData({
            firstname: "",
            lastname: "",
            username: "",
            password: "",
            confirmPassword: ""
        })
    }

    return (
        <div className={styles.Auth}>
            {/* Left Side */}
            <div className={styles.a_left}>
                <img className={styles.a_left_img} src={Logo} alt="" />
                <div className={styles.Webname}>
                    <h1 className={styles.Webname_h1}>Connect</h1>
                    <h6 className={styles.Webname_h6}>Explore the ideas throughout the World</h6>
                </div>
            </div>

            {/* Right Side */}
            <div className={styles.a_right}>
                <form className={`${styles.infoForm} ${styles.authForm}`} onSubmit={handleSubmit}>
                    <h3>{isSignUp ? "Sign Up" : "Log In"}</h3>


                    {isSignUp && <div className={styles.infoForm_div}>
                        <input onChange={handleChange} type="text" placeholder="First Name" className={styles.infoInput} name='firstname' value={data.firstname} />
                        <input onChange={handleChange} type="text" placeholder="Last Name" className={styles.infoInput} name='lastname' value={data.lastname} />

                    </div>}

                    <div className={styles.infoForm_div}>
                        <input onChange={handleChange} type="text" className={styles.infoInput} name='username' placeholder="Username" value={data.username} />
                    </div>
                    <div className={styles.infoForm_div}>
                        <input onChange={handleChange} type="password" className={styles.infoInput} name="password" placeholder="Password" value={data.password} />
                    </div>
                    {isSignUp &&
                        <div className={styles.infoForm_div}>
                            <input onChange={handleChange} type="password" className={styles.infoInput} name="confirmPassword" placeholder="Confirm Password" value={data.confirmPassword} />
                        </div>}

                    <span style={{ display: confirmPass ? "none" : "block", color: "red", fontSize: "12px", alignSelf: "flex-end", marginRight: "5px" }}>* Confirm Password is not same</span>
                    <div>
                        <span onClick={() => { setIsSignUp((prev) => !prev); resetForm() }} style={{
                            fontSize: "12px",
                            position: "relative",
                            right: "14px",
                            cursor: "pointer"
                        }}>{isSignUp ? "Already have an Account Login!" : "Don't have an account? Sign Up"}</span>
                    </div>
                    <button type="submit" disabled={loading} className={`button ${styles.infoButton}`}>{loading ? "Loading..." : isSignUp ? "Sign Up" : "Log In" }</button>
                </form>
            </div>
        </div>
    )
}




export default Auth
