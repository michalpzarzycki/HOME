import React from 'react'
import styles from './Projects.module.css'

function Projects({positionY, animation, handlePopup}) {
    return(
        <section className={styles.mainDiv}>
             <header>
                <h1 className={animation.projects!==false ? styles.title : styles.none}>PROJECTS</h1>
                <div className={animation.projects!==false ? styles.line : styles.none}></div>
            </header>
            <ul className={animation.projects!==false ? styles.projectSection : styles.none}>
                <li onClick={handlePopup} className={animation.projects!==false ? styles.project : styles.none}>
                    <div className={styles.front}></div>
                    <div className={styles.back}><span>MESSANGER</span></div>                
                </li>
                <li onClick={handlePopup}  className={animation.projects!==false ? styles.project : styles.none}>
                    <div className={styles.front}></div>
                    <div className={styles.back}><span>PACKMAN</span></div>                
                </li>
                <li className={animation.projects!==false ? styles.project : styles.none}>
                    <div className={styles.front}></div>
                    <div className={styles.back}><span>RECRUITMENT APP</span></div>                
                </li>
                <li className={animation.projects!==false ? styles.project : styles.none}>
                    <div className={styles.front}></div>
                    <div className={styles.back}><span>BOOTCAMP PROJECT</span></div>                
                </li>
                <li className={animation.projects!==false ? styles.project : styles.none}>
                    <div className={styles.front}></div>
                    <div className={styles.back}><span>REACT NATIVE APP</span></div>                
                </li>
                <li className={animation.projects!==false ? styles.project : styles.none}>
                    <div className={styles.front}></div>
                    <div className={styles.back}><span>...SOON</span></div>                
                </li>
            </ul>
        </section>
    )
}

export default Projects