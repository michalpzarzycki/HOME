import React from 'react'
import styles from './Home.module.css'

function Home() {

    return(  
     
        <section className={styles.mainDiv}>
              <div className={styles.opacity}></div>
            <div className={styles.flex}>
                <div className={styles.text}>
                    Hi, I'm <span class={styles.name}>Michal Zarzycki</span><br></br>
                    I'm a front-end developer
                </div>
                <div className={styles.button}>
                    <button>My projects</button>
                </div>
            </div>
          
        </section>
    
    )
}

export default Home;