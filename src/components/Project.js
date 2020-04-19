import React from 'react';
import styles from './Project.module.css'
import { Link } from 'react-router-dom'

function Project() {

    return(
        <div className={styles.mainDiv}>
            <section className={styles.navbar}>
                <div className={styles.author}>
                    <img src="https://avatars0.githubusercontent.com/u/41584779?s=400&u=004a3792191561f84e95e0c7761274c13b9e3d06&v=4" alt="My photo" />
                    <span>Michal Zarzycki Project</span>
                </div>
                <div className={styles.home}><Link to="/">HOME</Link></div>
            </section>
            <section className={styles.title}>PROJECT TITLE</section>
            <div className={styles.imageSection}>
                        <div className={styles.leftArrow}>&#60;</div>
                        <div className={styles.image}></div>
                        <div className={styles.rightArrow}>&#62;</div>
                    </div>

                <div className={styles.descriptionContainer}>
                    <div className={styles.buttons}>
                        <button>GITHUB</button>
                        <button>WWW</button>
                    </div>
                    <div className={styles.description}>
                        <p>ReactJS chat App connected with Firebase firestore</p>
                    </div>
                    <div className={styles.likesSection}>
                        <p>Like it? Let me know -> </p>
                        <i class="fas fa-thumbs-up"></i>
                        <div className={styles.likeDisplay}>100</div>
                    </div>
                </div>
                <section className={styles.addComment}>
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="email"/>
                    <textarea placeholder="Comment..."/>
                    <button>Add Comment</button>
                </section>
                <section className={styles.comments}>
                    <div className={styles.commentData}>
                        <div className={styles.commentAuthor}>AUTHOR(email)</div>
                        <div className={styles.commentDate}>01.01.01</div>
                    </div>
                    <div className={styles.commentContent}>
                        <p>SUPER PROJECT! GOOD JOB!</p>
                    </div>
                </section>
        </div>
    )
}

export default Project