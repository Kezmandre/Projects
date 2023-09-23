import React from 'react'
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <Footer>
        <div className={styles.first_footer}>
        <h2>get<span>linked</span></h2>
        <p>Getlinked Tech Hackathon is a technology innovation program established by a group of organization
            with the aim of showcasing young and talented individual in the field of technology
        </p>

        <a href="/">Term of use <span>|</span>  privacy policy</a>
        </div>

        <div className={styles.second_footer}>
            <h6>Useful links</h6>
            <ul>
            <li><a href="/">Overview</a></li>
            <li><a href="/">Timeline</a></li>
            <li><a href="/">FAQs</a></li>
            <li><a href="/">Register</a></li>
            </ul>
            <div className={styles.media_links}>
                <p>Follow us</p>
                <span className={styles.links}>
                    <img src="https://res.cloudinary.com/di9r3toow/image/upload/v1695375302/img/mdi_instagram_efbtre.svg" alt="" />
                    <img src="https://res.cloudinary.com/di9r3toow/image/upload/v1695392733/05eaf8b9-2c59-4f93-8160-0f589e91914f_pp2shn.png" alt="" />
                    <img src="https://res.cloudinary.com/di9r3toow/image/upload/v1695375311/img/Vector_xjxucw.svg" alt="" />
                    <img src="https://res.cloudinary.com/di9r3toow/image/upload/v1695375306/img/ri_linkedin-fill_svms6z.svg" alt="" />
                </span>
            </div>
        </div>
    </Footer>
  )
}

export default Footer
