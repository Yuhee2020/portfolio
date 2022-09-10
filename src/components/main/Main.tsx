import React from "react"
import styles from "./Main.module.scss"
import myPhoto from "../../common/c3-img/20200908_155403 (2).jpg"
import ReactTypingEffect from 'react-typing-effect'

export const Main = () => {
    return (
        <div id={"main"} className={styles.container}>
                <div className={styles.contentContainer}>

                    <img src={myPhoto} alt="Author"/>
                    <h1>
                        Hi, I'm Yukhimuk Dmitry!
                    </h1>
                    <div className={styles.aboutMe}>
                        <ReactTypingEffect text={["Front-end developer"]}/>
                    </div>
                </div>
        </div>
    )
}