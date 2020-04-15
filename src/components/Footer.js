import React from 'react'
import styles from './Footer.module.css'

function Footer() {

    return(
        <footer className={styles.mainDiv}>
            <div className={styles.icons}>
                <i>GitHub</i>
                <i>LinkedIn</i>
                <i>Facebook</i>
                <i>E-mail</i>
            </div>
            <div className={styles.infoBox}>
                <p>Michal Zarzycki <span className={styles.year}>©2020</span></p>
            </div>
        </footer>
    )
}

export default Footer;