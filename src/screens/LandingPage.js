import React, { useState, useLayoutEffect } from 'react'
import Home from '../components/Home'
import About from '../components/About'
import Projects from '../components/Projects'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import styles from './LandingPage.module.css'

function LandingPage() {
    const [positionY, setPositionY] = useState(0)
    const [isAnimationStart, setIsAnimationStart] = useState({about: false, projects:false, contact: false})
    useLayoutEffect(()=>{
        setPositionY(window.pageYOffset)

    }, [])
    
    useLayoutEffect(() => {
        function handleScroll() {
            setPositionY(window.pageYOffset)
            console.log(positionY)
            if(positionY>100 && positionY<800) {
                setIsAnimationStart(prev => ({
                   ...prev,
                   about:true
                }))
            } else if (positionY >800) {
                setIsAnimationStart(prev => ({
                    ...prev,
                    about:true,
                    projects:true
                 }))
            } 
        }
        window.addEventListener('scroll', handleScroll)
        
        return () => window.removeEventListener('scroll', handleScroll)
        }, [positionY])


    return(
        <div className={styles.mainDiv}>
            <Home />
            <About positionY={positionY} animation={isAnimationStart}/>
            <Projects positionY={positionY} animation={isAnimationStart}/>
            <Blog />
            {/* <Contact /> */}
            <Footer />
        </div>
    )
}

export default LandingPage;