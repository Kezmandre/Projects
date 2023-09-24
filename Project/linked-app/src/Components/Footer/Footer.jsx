import React from 'react'
import styles from "./Footer.module.css"

const Footers = () => {
  return (
    <div className={styles.footer_container}>
        <div className={styles.footer_items}>
        <div className={styles.first_footer}>
        <h2>get<span>linked</span></h2>
        <p>Getlinked Tech Hackathon is a technology innovation program <br /> established by a group of organization
            with the aim of showcasing <br /> young and talented individual in the field of technology
        </p>
        <a href="/">Terms of use <span>|</span>  privacy policy</a>
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
        <div className={styles.footer_contact}>
                <h6>Contact Us</h6>
                <div className={styles.tel}>
                    <img src="https://res.cloudinary.com/di9r3toow/image/upload/v1695499499/55a4f88f-a445-489f-9904-1cd4df47ee14_p1jafk.png" alt="" />
                    <p>+234 6707653444</p>
                </div>
                <div className={styles.address}>
                    <img src="https://res.cloudinary.com/di9r3toow/image/upload/v1695552711/5a27d4bb-7b1b-492b-a5e2-ce1acec7de0d_senuvj.png" alt="" />
                    <p>27,Alara Street <br />Yaba 1000012 <br />Lagos State</p>
                </div>
            </div>
            </div>
            <div className={styles.copyright}>
     <p>All right reserved. &copy; <span>getlinked Ltd.</span></p>
 </div>
    </div>
    
    
  )
}

export default Footers
