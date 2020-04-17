import React from 'react'
import styles from './About.module.css'

function About() {
    return(
        <section className={styles.mainDiv}>
            <header>
                <h1 className={styles.header}>ABOUT</h1>
                <div className={styles.line}></div>
                <img src="https://avatars0.githubusercontent.com/u/41584779?s=400&u=004a3792191561f84e95e0c7761274c13b9e3d06&v=4" alt="My photo"/>
                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </header>
            <section className={styles.barSection}>
                <div className={styles.barDiv}>
                    <div className={styles.barLabel}>JavaScript</div>
                    <div className={styles.barPercent}></div>
                </div>
                <div className={styles.barDiv}>
                    <div className={styles.barLabel}>CSS</div>
                    <div className={styles.barPercent}></div>
                </div>
                <div className={styles.barDiv}>
                    <div className={styles.barLabel}>HTML</div>
                    <div className={styles.barPercent}></div>
                </div>
                <div className={styles.barDiv}>
                    <div className={styles.barLabel}>ReactJS</div>
                    <div className={styles.barPercent}></div>
                </div>
                <div className={styles.barDiv}>
                    <div className={styles.barLabel}>React Native</div>
                    <div className={styles.barPercent}></div>
                </div>
                <div className={styles.barDiv}>
                    <div className={styles.barLabel}>Node</div>
                    <div className={styles.barPercent}></div>
                </div>
            </section>
        </section>
    )
}

export default About