import React from 'react'
import Home from '../components/Home'
import About from '../components/About'
import Projects from '../components/Projects'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import styles from './LandingPage.module.css'

function LandingPage() {
    return(
        <div className={styles.mainDiv}>
            <Home />
            <About />
            <Projects />
            <Blog />
            {/* <Contact /> */}
            <Footer />
        </div>
    )
}

export default LandingPage;