import React from 'react'
import styles from './Blog.module.css'

function Blog({animation}) {
    return(
        <section className={styles.mainDiv}>
            {console.log("BLOG", animation.blog)}
              <header>
                <h1 className={animation.blog!==false ? styles.mainTitle : styles.none}>BLOG</h1>
                <div className={animation.blog!==false ? styles.line : styles.none}></div>
            </header>
            <div className={styles.postDiv}>
            <a className={styles.a} href="/">
                <div className={animation.blog!==false ? styles.postContainer : styles.none}>
                    <div className={styles.image}>
                        <img src="https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Blog image"/>
                    </div>
                    <div className={styles.title}>WORLD TRADE CENTER</div>
                    <div className={styles.date}>9/11/01</div>
                    <div className={styles.postLine}></div>
                    <div className={styles.description}>Description goes here</div>
                </div>
            </a>
            <a className={animation.blog!==false ? styles.a : styles.none} href="/">
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
            <a className={animation.blog!==false ? styles.a : styles.none} href="/">
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
            <a className={animation.blog!==false ? styles.a : styles.none} href="/">
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
            </div>
        </section>
    )
}

export default Blog;