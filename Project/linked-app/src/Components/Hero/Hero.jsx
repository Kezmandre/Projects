import React from 'react'
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <div className={styles.container}>
        <div className={styles.inner_container}>
        <div className={styles.hero_title}>
            <p>igniting a Revolution in HR Innovation</p>
            <div className={styles.hero_title_line}><img src="https://res.cloudinary.com/di9r3toow/image/upload/v1695375310/img/Vector_4_wqo0g5.svg" alt="" /></div>
        </div>
        <div className={styles.hero}>
            <div className={styles.hero_header}>
                <h1>getLinked Tech <br />Hackathon <span>1.0</span> </h1>
                <div className={styles.hero_header_bulb}><img src="https://res.cloudinary.com/di9r3toow/image/upload/v1695692733/5864c218-214c-4257-928a-6a7d51f4c5fa_j0hkbt.png" alt="" /></div>
                <p>Particpate in getkinked tech Hackathon 2023 stand a chance to win Big prize</p>
                <button>Register</button>
                <div className={styles.timer}>
                    <span>00<sub>H</sub></span>
                    <span>00<sub>M</sub></span>
                    <span>00<sub>S</sub></span>
                </div>
                
        
            </div>

            <div className={styles.hero_banner}>
                <div className={styles.hero_img}>
                    <img src="https://res.cloudinary.com/di9r3toow/image/upload/v1695375302/img/man-wearing-smart-glasses-touching-virtual-screen_1_b30t25.png" alt="" />
                </div>
            </div>
        </div>
        </div>
        <div className={styles.gradient_img}>
            <img src="https://res.cloudinary.com/di9r3toow/image/upload/v1695687107/6f06ef2d-801a-45f2-94f0-20b845ad87bd_lbeifq.png" alt="" />
        </div>
    </div>
  )
}

export default Hero