// import React from 'react'
import styles from "../../styles/Circle.module.css"
import circle from '../../assets/circle.png'

const Circle = () => {
  return (
    <div className={styles.circle}>
      <div className={styles.left}>
          <img className={styles.l1} src={circle} alt="circle" />
          <img className={styles.l2} src={circle} alt="circle" />
          <img className={styles.l3} src={circle} alt="circle" />
          <img className={styles.l4} src={circle} alt="circle" />
          {/* <div className="c5"><img src={circle} alt="circle" /></div>
        <div className="c6"><img src={circle} alt="circle" /></div> */}
      </div>
      <div className={styles.right}>
          <img className={styles.r1} src={circle} alt="circle" />
          <img className={styles.r2} src={circle} alt="circle" />
          <img className={styles.r3} src={circle} alt="circle" />
          <img className={styles.r4} src={circle} alt="circle" />
          {/* <div className="c5"><img src={circle} alt="circle" /></div>
        <div className="c6"><img src={circle} alt="circle" /></div> */}
      </div>
    </div>
  )
}

export default Circle
