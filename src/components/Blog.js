import React from 'react'
import styles from './Blog.module.css'

function Blog() {
    return(
        <section className={styles.mainDiv}>
              <header>
                <h1>BLOG</h1>
                <div className={styles.line}></div>
            </header>
            <a href="/">
                <div className={styles.postContainer}>
                    <div className={styles.image}>
                        <img src="https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Blog image"/>
                    </div>
                    <div className={styles.title}>WORLD TRADE CENTER</div>
                    <div className={styles.date}>9/11/01</div>
                    <div className={styles.postLine}></div>
                    <div className={styles.description}>Description goes here</div>
                </div>
            </a>
            <a href="/">
                <div className={styles.postContainer}>
                    <div className={styles.image}>
                        <img src="https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Blog image"/>
                    </div>
                    <div className={styles.title}>WORLD TRADE CENTER</div>
                    <div className={styles.date}>9/11/01</div>
                    <div className={styles.postLine}></div>
                    <div className={styles.description}>Description goes here</div>
                </div>
            </a>
            <a href="/">
                <div className={styles.postContainer}>
                    <div className={styles.image}>
                        <img src="https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Blog image"/>
                    </div>
                    <div className={styles.title}>WORLD TRADE CENTER</div>
                    <div className={styles.date}>9/11/01</div>
                    <div className={styles.postLine}></div>
                    <div className={styles.description}>Description goes here</div>
                </div>
            </a>
            <a href="/">
                <div className={styles.postContainer}>
                    <div className={styles.image}>
                        <img src="https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Blog image"/>
                    </div>
                    <div className={styles.title}>WORLD TRADE CENTER</div>
                    <div className={styles.date}>9/11/01</div>
                    <div className={styles.postLine}></div>
                    <div className={styles.description}>Description goes here</div>
                </div>
            </a>
        </section>
    )
}

export default Blog;