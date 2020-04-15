import React from 'react'
import styles from './Footer.module.css'

function Footer() {

    return(
        <footer className={styles.mainDiv}>
            <div className={styles.icons}>
                <div className={styles.iconBox}>
                    <i class="fas fa-code-branch"></i>
                    <p>GitHub</p>
                </div>
                <div className={styles.iconBox}>
                    <i class="fab fa-linkedin-in"></i>
                    <p>LinkedIn</p>
                </div>
                <div className={styles.iconBox}>
                    <i class="fab fa-youtube"></i>
                    <p>YouTube</p>
                </div>
                <div className={styles.iconBox}>
                    <i class="fas fa-at"></i>
                    <p>E-mail</p>
                </div>
               
            </div>
            <div className={styles.infoBox}>
                <p>Michal Zarzycki <span className={styles.year}>©2020</span></p>
            </div>
        </footer>
    )
}

export default Footer;