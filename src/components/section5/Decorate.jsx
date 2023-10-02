// import React from 'react'
import styles from "../../styles/Decorate.module.css"
import StarStruck from "../../assets/StarStruck.png"
import MoneyWithWings from "../../assets/MoneyWithWings.png"
import SmilingFaceWithSunglasses from "../../assets/SmilingFaceWithSunglasses.png"
import MoneyBag from "../../assets/MoneyBag.png"
import Globe from "../../assets/Globe.png"
import Unicorn from "../../assets/Unicorn.png"
import Confetti from "../../assets/Confetti.png"
import Fire from "../../assets/Fire.png"
import Honeybee from "../../assets/Honeybee.png"
import Cowboy from "../../assets/Cowboy.png"
import PartyPopper from "../../assets/PartyPopper.png"
import CrystalBall from "../../assets/CrystalBall.png"
import WrappedGift from "../../assets/WrappedGift.png"
const Decorate = () => {
    return (
        <div className={styles.decorate}>
            <div className={styles.c1}>
                <img className={styles.c11} src={StarStruck} alt={StarStruck} loading="lazy" />
                <img className={styles.c12} src={MoneyWithWings} alt={MoneyWithWings} loading="lazy" />
            </div>
            <div className={styles.c2}>
                <img className={styles.c21} src={SmilingFaceWithSunglasses} alt={SmilingFaceWithSunglasses} />
                <img className={styles.c22} src={MoneyBag} alt={MoneyBag} />
                <img className={styles.c23} src={Globe} alt={Globe} />
                <img className={styles.c24} src={Unicorn} alt={Unicorn} />
                <img className={styles.c25} src={Confetti} alt={Confetti} />
            </div>
            <div className={styles.c3}>
                <img className={styles.c31} src={Fire} alt={Fire} />
                <img className={styles.c32} src={Honeybee} alt={Honeybee} />
                <img className={styles.c33} src={Cowboy} alt={Cowboy} />
                <img className={styles.c34} src={PartyPopper} alt={PartyPopper} />
                <img className={styles.c35} src={CrystalBall} alt={CrystalBall} />
                <img className={styles.c36} src={WrappedGift} alt={WrappedGift} />
            </div>
            <div className={styles.c4}></div>
        </div>
    )
}

export default Decorate
