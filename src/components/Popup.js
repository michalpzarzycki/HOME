import React, { useState, useEffect } from 'react'
import styles from './Popup.module.css'

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

function Popup({visible, handlePopup, popupData}) {
const [data, setData] = useState(INIT_STATE)
const [isVisible, setIsVisible] = useState(visible)

useEffect(() => {
    setData(popupData)
    console.log(popupData)
}, [popupData])
    return(
        <div className={visible ? styles.mainDiv : styles.none}>
            {console.log("POPUP", popupData)}
            <div onClick={handlePopup} className={styles.background}></div>
            <div className={styles.popupContainer}>
                <div className={styles.imagesContainer}>
                    <div className={styles.headerSection}>
                     <div className={styles.title}>{data.title}</div>
                        <div onClick={handlePopup} className={styles.close}>X</div>
                    </div>
                    <div className={styles.imageSection}>
                        <div className={styles.leftArrow}>&#60;</div>
                        <div className={styles.image}></div>
                        <div className={styles.rightArrow}>&#62;</div>
                    </div>
                </div>
                <div className={styles.descriptionContainer}>
                    <div className={styles.buttons}>
                        <button>GITHUB</button>
                        <button>WWW</button>
                        <button>COMMENT</button>
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