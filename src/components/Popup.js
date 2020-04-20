import React, { useState, useEffect } from 'react'
import pic2 from '../gifs/intervYou2.gif'
import pic1 from '../gifs/intervYou1.gif'

import styles from './Popup.module.css'
import { Link } from 'react-router-dom'

const INIT_STATE = {
        title: 'TITLE',
        id: 'id',
        links: {
            github: "https://www.github.com",
            www: "https://www.google.com",
            comments:""
        },
        description: "Description",
        gifs:[],
        likes: 5
}

function Popup({visible, handlePopup, choosenProject, handleClose}) {
const [data, setData] = useState(INIT_STATE)
const [isVisible, setIsVisible] = useState(visible)
const [gifNumber, setGifNumber] = useState(1)
const [gifArray, setGifArray] = useState([1,1])




useEffect(() => {

    if(document.querySelector('body')) {
        document.querySelector('#image').style.backgroundImage = `url("${pic1}")` ;
        let dots = gifArray.map((elem, index) => document.getElementById(`${index+1}`))
        dots.forEach((elem) => elem.style.backgroundColor='grey' )
        let choosenDote = dots[gifNumber]
        document.getElementById("1").style.backgroundColor = "#04c2c9";
    }
}, [choosenProject])





function handleRightArrow() {
    let currentNumber = gifNumber+1;

    if(currentNumber<gifArray.length){
         setGifNumber(currentNumber)
    } else {
        setGifNumber(currentNumber%gifArray.length)
    } 
        document.getElementById(`image`).style.backgroundImage = `url("${gifNumber%2 ? pic2 : pic1}")`
        let dots = gifArray.map((elem, index) => document.getElementById(`${index+1}`))
        dots.forEach((elem) => elem.style.backgroundColor='grey' )
        let choosenDote = dots[gifNumber]
        choosenDote.style.backgroundColor = '#04c2c9'




}

function handleLeftArrow() {

}
    return(
        <div className={visible ? styles.mainDiv : styles.none}>
            <div onClick={handleClose} className={styles.background}></div>
            <div className={styles.popupContainer}>
                <div className={styles.imagesContainer}>
                    <div className={styles.headerSection}>
                     <div className={styles.title}>{data.title}</div>
                        <div onClick={handlePopup} className={styles.close}>X</div>
                    </div>
                    <div className={styles.imageSection}>
                        <div className={styles.leftArrow} onClick={handleLeftArrow}>&#60;</div>
                        <div className={styles.image} id="image">
                            <div className={styles.imageDot}>
                            { gifArray.map((elem, index) => (
                                   <div className={styles.dot} key={index} id={index+1}></div>
                            ))}
                            </div>
                        </div>
                        <div className={styles.rightArrow} onClick={handleRightArrow}>&#62;</div>
                    </div>
                </div>
                <div className={styles.descriptionContainer}>
                    <div className={styles.buttons}>
                        <button>GITHUB</button>
                        <button>WWW</button>
                        <Link to={`/project/${choosenProject.qid}`} >COMMENT</Link>
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
            </div>
        </div>
    )
}

export default Popup