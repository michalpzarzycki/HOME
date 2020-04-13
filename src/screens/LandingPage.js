import React from 'react'
import Home from '../components/Home'
import About from '../components/About'
import Projects from '../components/Projects'
import Blog from '../components/Blog'
import Contact from '../components/Contact'

function LandingPage() {
    return(
        <div>
            <Home />
            <About />
            <Projects />
            <Blog />
            <Contact />
        </div>
    )
}

export default LandingPage;