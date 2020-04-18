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
                        <img src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/s2048x2048/73342812_446214152753575_3115062328643551232_n.jpg?_nc_cat=110&_nc_sid=b96e70&_nc_ohc=1rHCK5P918sAX_m5WaS&_nc_ht=scontent-waw1-1.xx&_nc_tp=7&oh=84865a1b2c5fbc9d8245ba08eca9fc08&oe=5EC258D9" alt="Blog image"/>
                    </div>
                    <div className={styles.title}>My Front-End Bootcamp Story</div>
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