import React from 'react'
import { Link } from 'react-router-dom'
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
            <Link className={styles.a} to="/article1">
                <div className={animation.blog!==false ? styles.postContainer : styles.none}>
                    <div className={styles.image}>
                    <div className={styles.background} style={{background:'url("https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/s2048x2048/73342812_446214152753575_3115062328643551232_n.jpg?_nc_cat=110&_nc_sid=b96e70&_nc_ohc=1rHCK5P918sAX_m5WaS&_nc_ht=scontent-waw1-1.xx&_nc_tp=7&oh=84865a1b2c5fbc9d8245ba08eca9fc08&oe=5EC258D9")'}}></div>
                        <div className={styles.img} style={{background:'url("https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/s2048x2048/73342812_446214152753575_3115062328643551232_n.jpg?_nc_cat=110&_nc_sid=b96e70&_nc_ohc=1rHCK5P918sAX_m5WaS&_nc_ht=scontent-waw1-1.xx&_nc_tp=7&oh=84865a1b2c5fbc9d8245ba08eca9fc08&oe=5EC258D9")'}}></div>
                    </div>
                    <div className={styles.title}>My Front-End Bootcamp Story</div>
                    <div className={styles.date}>9/11/01</div>
                    <div className={styles.postLine}></div>
                    <div className={styles.description}>Description goes here</div>
                </div>
            </Link>
            <a className={animation.blog!==false ? styles.a : styles.none} href="/">
                <div className={styles.postContainer}>
                    <div className={styles.image}>
                    <div className={styles.background} style={{background:'url("https://i.ibb.co/2ZZNndt/hobby-ERGO.png")'}}></div>
                        <div className={styles.img} style={{background:'url("https://i.ibb.co/2ZZNndt/hobby-ERGO.png")'}}></div>
                    </div>
                    <div className={styles.title}>My hobbies</div>
                    <div className={styles.date}>9/11/01</div>
                    <div className={styles.postLine}></div>
                    <div className={styles.description}>Description goes here</div>
                </div>
            </a>
            <a className={animation.blog!==false ? styles.a : styles.none} href="/">
                <div className={styles.postContainer}>
                    <div className={styles.image}>
                    <div className={styles.background} style={{background:'url("https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")'}}></div>
                        <div className={styles.img} style={{background:'url("https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")'}}></div>
                    </div>
                    <div className={styles.title}>Why I love JS</div>
                    <div className={styles.date}>9/11/01</div>
                    <div className={styles.postLine}></div>
                    <div className={styles.description}>Description goes here</div>
                </div>
            </a>
            <a className={animation.blog!==false ? styles.a : styles.none} href="/">
                <div className={styles.postContainer}>
                    <div className={styles.image}>
                    <div className={styles.background} style={{background:'url("https://images.pexels.com/photos/7095/people-coffee-notes-tea.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")'}}></div>
                        <div className={styles.img} style={{background:'url("https://images.pexels.com/photos/7095/people-coffee-notes-tea.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")'}}></div>
                    </div>
                    <div className={styles.title}>What I've been learning from my projects</div>
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