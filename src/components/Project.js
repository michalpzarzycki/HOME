import React, { useEffect, useState } from 'react';
import styles from './Project.module.css'
import { Link } from 'react-router-dom'
import {db} from '../firebase'

function Project(props) {
    const [projectsData, setProjectsData] = useState({})
    useEffect(() => {
        db.collection('projects').doc()

    }, [])

    useEffect(() => {       
        // TODO: Unsubscribe to this function 
        db.collection("projects").onSnapshot(handleSnapshot)
    }, [])




    function handleSnapshot(snapshot) {
        const projects = snapshot.docs.map(doc => {
            
            return { qid: doc.id, ...doc.data() }
        })
        let filtered = Object.values(projects).filter(elem => 
            {    console.log(elem.qid == props.match.params.qid)
                return( elem.qid == props.match.params.qid) 
               

            })
            console.log("SORTED", filtered)
        
        setProjectsData(...filtered)
    }

    function handleLike() {
        let likeId = props.match.params.qid;
        const likeRef = db.collection('projects').doc(likeId);
        likeRef.get().then(doc => {
            if(doc.exists) {
                let updatedLikes = doc.data().likes + 1;
                likeRef.update({likes: updatedLikes})
                console.log("UPDATED", updatedLikes)
            }
        })
    }
    return(
        <div className={styles.mainDiv}>
            <section className={styles.navbar}>
                <div className={styles.author}>
                    <img src="https://avatars0.githubusercontent.com/u/41584779?s=400&u=004a3792191561f84e95e0c7761274c13b9e3d06&v=4" alt="My photo" />
                    <span>Michal Zarzycki Project</span>
                </div>
                <div className={styles.home}><Link to="/">HOME</Link></div>
            </section>
            <section className={styles.title}>PROJECT TITLE</section>
            <div className={styles.imageSection}>
                        <div className={styles.leftArrow}>&#60;</div>
                        <div className={styles.image}></div>
                        <div className={styles.rightArrow}>&#62;</div>
                    </div>

                <div className={styles.descriptionContainer}>
                    <div className={styles.buttons}>
                        <button>GITHUB</button>
                        <button>WWW</button>
                    </div>
                    <div className={styles.description}>
                        <p>ReactJS chat App connected with Firebase firestore</p>
                    </div>
                    <div className={styles.likesSection} onClick={handleLike}>
                        <p>Like it? Let me know -> </p>
                        <i class="fas fa-thumbs-up"></i>
                        <div className={styles.likeDisplay}>{projectsData.likes}</div>
                    </div>
                </div>
                <form className={styles.addComment}>
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="email"/>
                    <textarea placeholder="Comment..."/>
                    <button>Add Comment</button>
                </form>
                <section className={styles.comments}>
                    <div className={styles.commentData}>
                        <div className={styles.commentAuthor}>AUTHOR(email)</div>
                        <div className={styles.commentDate}>01.01.01</div>
                        <div className={styles.commentNumber}>#1</div>
                    </div>
                    
                    <div className={styles.commentContent}>
                        <p>SUPER PROJECT! GOOD JOB!</p>
                    </div>
                </section>
        </div>
    )
}

export default Project