// import React from 'react'
import styles from '../styles/Footer.module.css'
import fb from '../assets/fb.png'
import twitter from '../assets/twitter.png'
import insta from '../assets/insta.png'
import yt from '../assets/yt.png'
const company = [
    "About Us",
    "Support",
    "Blog",
    "Login",
    "Signup",
    "Contact Us"
]
const programs = [
    "Affiliate Program",
    "Ambassador Program",
    "Partnership Program"
]
const policy = [
    "Legal",
    "DMCA",
    "USC 2257",
    "Privacy Policy",
    "Terms  and Conditions"
]
const follow = [
    fb,twitter,insta,yt
]
const footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>LOGO</div>
      <div className={styles.company}>
        <div>Company</div>
        <ul>
            {
                company.map((ele)=>(
                    <li key={ele}><a href="/">{ele}</a></li>
                ))
            }
        </ul>
      </div>
      <div className={styles.programs}>
        <div>Programs</div>
        <ul>
            {
                programs.map((ele)=>(
                    <li key={ele}><a href="/">{ele}</a></li>
                ))
            }
        </ul>
      </div>
      <div className={styles.policy}>
        <div>Policy</div>
        <ul>
            {
                policy.map((ele)=>(
                    <li key={ele}><a href="/">{ele}</a></li>
                ))
            }
        </ul>
      </div>
      <div className={styles.follow}>
        <div>Follow Us</div>
        <ul>
            {
                follow.map((ele)=>(
                    <li key={ele}><a href="/"><img src={ele} alt={ele} loading='lazy' /></a></li>
                ))
            }
        </ul>
      </div>
    </div>
  )
}

export default footer
