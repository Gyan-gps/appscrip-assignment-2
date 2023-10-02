// import React from 'react'
import Images from '../../assets/Images.png'
import styles from '../../styles/Section4.module.css'
const Section4 = () => {
  return (
    <section className={styles.section4}>
      <div>
        <img src={Images} width="100%" alt='section4-img' loading='lazy' />
      </div>
    </section>
  )
}

export default Section4
