// import React from 'react'
import styles from '../../styles/Section1.module.css'
import mb from '../../assets/mb.png'
import gicon from '../../assets/gicon.png'
import cloud from '../../assets/cloud.png'
import cloudtop from '../../assets/cloudtop.png'
const Section1 = () => {
    return (
        <section className={styles.section1} 
            style={{
                // position: "absolute",
                backgroundImage: `url(${cloudtop}),url(${cloud}),url(${mb})`,
                backgroundPosition: "-30px top ,right bottom",
                backgroundSize: "80% clamp(156px,19vw,367px), 80% clamp(166px,19vw,367px), cover",
                backgroundRepeat: "no-repeat"
        }}>
            <div className={styles.left}>
                <div>A Creator’s Paradise</div>
                <p>Were Creativity Meets Success</p>
            </div>
            <div className={styles.right}>
                <div className={styles.flex}>
                    <div className={styles.header}><img src={gicon} alt='gicon' loading='lazy' /><div>Continue With Google</div></div>
                    <hr className={styles.hr}/>
                    <div className={styles.form}>
                        <div className={styles.name}>
                            <input type="text" placeholder="First name*" required />
                            <input type="text" placeholder="Last name*" required />
                        </div>
                        <input type="email" placeholder="Email*" required />
                        <input type="password" placeholder="Password*" required />
                        <div className={styles.select}>
                            <select >
                                <option>(GMT+05:30) india standard Time - Calcutta </option>
                            </select>
                        </div>
                    </div>
                    <button className={styles.btn}>Signup as a user</button>
                    <p>By signing up you agree to our Terms & Conditions and Privacy Policy. and confirm that you are at least 18 years old.</p>
                    <button className={styles.btn}>Signup as a creator</button>
                    <p>Already have an account?<a href='/'> Login</a></p>
                </div>
            </div>
        </section>
    )
}

export default Section1
