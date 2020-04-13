import React from 'react'
import styles from './Projects.module.css'

function Projects() {
    return(
        <div className={styles.mainDiv}>
             <header>
                <h1>PROJECTS</h1>
                <div className={styles.line}></div>
            </header>
            <section className={styles.projectSection}>
                <div className={styles.project}>
                    <img src="https://i.pinimg.com/236x/69/16/e2/6916e2b11f37661b5ba69a422c49460c--react-tutorial-web-design-tools.jpg"/>
                </div>
                <div className={styles.project}>
                    <img src="https://i.pinimg.com/236x/69/16/e2/6916e2b11f37661b5ba69a422c49460c--react-tutorial-web-design-tools.jpg"/>
                </div>
                <div className={styles.project}>
                    <img src="https://i.pinimg.com/236x/69/16/e2/6916e2b11f37661b5ba69a422c49460c--react-tutorial-web-design-tools.jpg"/>
                </div>
                <div className={styles.project}>
                    <img src="https://i.pinimg.com/236x/69/16/e2/6916e2b11f37661b5ba69a422c49460c--react-tutorial-web-design-tools.jpg"/>
                </div>
                <div className={styles.project}>
                    <img src="https://i.pinimg.com/236x/69/16/e2/6916e2b11f37661b5ba69a422c49460c--react-tutorial-web-design-tools.jpg"/>
                </div>
                <div className={styles.project}>
                    <img src="https://i.pinimg.com/236x/69/16/e2/6916e2b11f37661b5ba69a422c49460c--react-tutorial-web-design-tools.jpg"/>
                </div>
            </section>
        </div>
    )
}

export default Projects