import React from 'react'
import styles from './Footer.module.css'

function Footer() {

    return(
        <footer className={styles.mainDiv}>
            <div className={styles.icons}>
                <a className={styles.a}>
                    <div className={styles.iconBox}>
                        <i class="fas fa-code-branch"></i>
                    </div>
                </a>
               <a className={styles.a}>
                    <div className={styles.iconBox}>
                        <i class="fab fa-linkedin-in"></i>
                    </div>
               </a>
               <a className={styles.a}>
               <div className={styles.iconBox}>
                    <i class="fab fa-youtube"></i>
                </div>
               </a>
              <a className={styles.a}>
              <div className={styles.iconBox}>
                    <i class="fas fa-at"></i>
                </div>
              </a>
               
               
            </div>
            <div className={styles.infoBox}>
                <p>Michal Zarzycki <span className={styles.year}>©2020</span></p>
            </div>
        </footer>
    )
}

export default Footer;