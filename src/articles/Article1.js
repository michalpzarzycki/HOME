import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Article1.module.css'

function Article1() {
    return(
        <div className={styles.mainDiv}>
            <section className={styles.navbar}>
                <div className={styles.author}>
                    <img src="https://avatars0.githubusercontent.com/u/41584779?s=400&u=004a3792191561f84e95e0c7761274c13b9e3d06&v=4" alt="My photo"/>
                    <span>Michal Zarzycki Blog</span>
                </div>
                <div className={styles.home}><Link to="/">HOME</Link></div>
            </section>
            <section className={styles.titleSection}></section>
            <section className={styles.imageSection}></section>
            <section className={styles.introSection}></section>
            <section className={styles.paragraphSection}></section>
            <section cllasName={styles.paragraphSection}></section>
        </div>
    )
}

export default Article1