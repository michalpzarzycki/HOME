import React, { useState, useLayoutEffect, useEffect } from 'react'
import Home from '../components/Home'
import About from '../components/About'
import Projects from '../components/Projects'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import Popup from '../components/Popup'
import Footer from '../components/Footer'
import styles from './LandingPage.module.css'
import firebase, { db } from '../firebase'

function LandingPage() {
    const [positionY, setPositionY] = useState(0)
    const [isAnimationStart, setIsAnimationStart] = useState({about: false, projects:false, contact: false, blog:false})
    const [isPopupVisible, setIsPopupVisible] = useState(false)
    const [popupData, setPopupData] = useState({})
    const [choosenProject, setChoosenProject] = useState({gifs:[]})
    useLayoutEffect(()=>{
        setPositionY(window.pageYOffset)
        db.collection("projects").onSnapshot(handleSnapshot)
        
     

    }, [])

    function handleSnapshot(snapshot) {
        const items = snapshot.docs.map(doc => {
            return { qid: doc.id, ...doc.data() }
        })
        

        
        setPopupData({...items})
    }
    
    useLayoutEffect(() => {
        function handleScroll() {
            setPositionY(window.pageYOffset)
            console.log(positionY)
            if(positionY>100 && positionY<800) {
                setIsAnimationStart(prev => ({
                   ...prev,
                   about:true
                }))
            } else if (positionY >800 && positionY<1145) {
                setIsAnimationStart(prev => ({
                    ...prev,
                    about:true,
                    projects:true
                 }))
            } else if(positionY> 1145)  {
                setIsAnimationStart(prev => ({
                    ...prev,
                    about:true,
                    projects:true,
                    blog:true
                 }))
            }
        }
        window.addEventListener('scroll', handleScroll)
        
        return () => window.removeEventListener('scroll', handleScroll)
        }, [positionY])
function handleClose() {
    setIsPopupVisible(prev => !prev)

}
function handlePopup(qid) {

    setIsPopupVisible(prev => !prev)
    const choose = Object.values(popupData).filter((obj)=>{
        return obj.qid == qid
    })
    setChoosenProject(...choose)
    console.log("Choose", ...choose)

    // if(id=="packman") {
    //         setPopupData({
    //             title: 'Packman',
    //             id: '',
    //             links: {
    //                 github: "https://www.github.com",
    //                 www: "https://www.google.com",
    //                 comments:""
    //             },
    //             description: "Packman Game, React",
    //             gifs:[],
    //             likes: 5
    //         })
    // } else if(id=="recruitmentApp") {
    //             setPopupData({
    //                 title: 'RecruitmentApp',
    //                 id: '2',
    //                 links: {
    //                     github: "https://www.github.com",
    //                     www: "https://www.google.com",
    //                     comments:""
    //                 },
    //                 description: "Our group project, recruitment App",
    //                 gifs:[],
    //                 likes: 15
    //             })
    // }
}
    return(
        <div className={styles.mainDiv}>
            <Home />
            <About positionY={positionY} animation={isAnimationStart}/>
            <Projects positionY={positionY} animation={isAnimationStart} handlePopup={handlePopup} data={popupData}/>
            <Blog animation={isAnimationStart}/>
            {/* <Contact /> */}
            <Popup visible={isPopupVisible} handlePopup={handlePopup} handleClose={handleClose} popupData={popupData} choosenProject={choosenProject}/>
            <Footer />
        </div>
    )
}

export default LandingPage;