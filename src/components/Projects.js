import React from 'react'
import styles from './Projects.module.css'

function Projects({positionY, animation, handlePopup, data}) {
    return(
        <section className={styles.mainDiv}>
             <header>
                <h1 className={animation.projects!==false ? styles.title : styles.none}>PROJECTS</h1>
                <div className={animation.projects!==false ? styles.line : styles.none}></div>
            </header>
            <ul className={animation.projects!==false ? styles.projectSection : styles.none}>
                {Object.values(data).map((obj, index) => (
                      <li key={index} onClick={() => handlePopup(obj.qid)}  className={animation.projects!==false ? styles.project : styles.none}>
                      <div className={styles.front}></div>
                <div className={styles.back} ><span>{obj.title}</span></div>                
                  </li>
                ) )}
            </ul>
        </section>
    )
}

export default Projects