import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Article1.module.css'

function Article1() {
    return (
        <div className={styles.mainDiv}>
            <section className={styles.navbar}>
                <div className={styles.author}>
                    <img src="https://avatars0.githubusercontent.com/u/41584779?s=400&u=004a3792191561f84e95e0c7761274c13b9e3d06&v=4" alt="My photo" />
                    <span>Michal Zarzycki Blog</span>
                </div>
                <div className={styles.home}><Link to="/">HOME</Link></div>
            </section>
            <section className={styles.titleSection}>Javascript ‘this’ Keyword, How it works?</section>
            <section className={styles.imageSection}>
                <img src="https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Content image" />
            </section>
            <section className={styles.introSection}>
                <h1 className={styles.introSection_header}>Introduction</h1>
                <p className={styles.introSection_paragraph}>One of the most confusing topics for JS developers is defining the context that this referred to. We will try to explain 4 rules which help you to define the context of this.</p>
            </section>
            <section className={styles.paragraphSection}>
                <h1 className={styles.paragraphSection_header}>PAragraph 1</h1>
                <p className={styles.paragraphSection_paragraph}>The last rule exists for this binding.The function that is called with new operator when the code new Foo(…) is executed, the following things happen: 1- An empty object is created and referenced by this variable, inheriting the prototype of the function.2- Properties and methods are added to the object referenced by this. 3- The newly created object referenced by this is returned at the end implicitly (if no other object was returned explicitly).</p>
            </section>

        </div>
    )
}

export default Article1