import React, { useState } from 'react'
import styles from './Popup.module.css'

function Popup({visible, handlePopup}) {
const [isVisible, setIsVisible] = useState(visible)
    return(
        <div className={visible ? styles.mainDiv : styles.none}>
            <div className={styles.popupContainer}>
                <div className={styles.imagesContainer}>
                    <div className={styles.headerSection}>
                        <div className={styles.title}>MESSENGER</div>
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