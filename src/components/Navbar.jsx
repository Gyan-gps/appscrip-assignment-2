// import React from 'react'
// import { useState } from 'react'
import menu from '../assets/menu.png'
import styles from '../styles/Navbar.module.css'
const list = ["Home", "About Us", "Our Blog", "Support", "Affiliate"]
const Navbar = () => {
  // const [show,setShow] = useState(false);
  return (
    <div className={styles.navbar}>
      <div className={styles.logo} >LOGO</div>
      <ul className={styles.ul}>

        {
          list.map((ele) => (
            <li key={ele} className={styles.li}>
              <a href="/" >{ele}</a>
            </li>
          ))
        }
        <li className={styles.li}>
          <select>
            <option>Programs</option>
          </select>
          {/* <a href="/" ></a> */}
        </li>
      </ul>
      <div className={styles.navbtn}>
        <button className={styles.loginbtn}>Login</button>
        <button className={styles.signupbtn}>Signup</button>
      </div>
      <div className={styles.menu}>
        <img src={menu} alt='menu' loading='lazy'/>
      </div>
    </div>
  )
}

export default Navbar
