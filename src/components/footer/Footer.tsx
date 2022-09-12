import React from "react"
import styles from "./Footer.module.scss"
import {faInstagram, faLinkedin, faTelegram, faViber, faVk, faGithub} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import CWIcon from "../../common/c3-img/codewars.svg"

export const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <p>Copyright © 2022 Dmitry Yukhimuk. All rights reserved</p>
                <div className={styles.contacts}>
                    <a href={"https://t.me/DzmitryYukhimuk"}><FontAwesomeIcon icon={faTelegram} size={"2x"}/></a>
                    <a href={"viber://chat?number=%2B375295256082"}><FontAwesomeIcon icon={faViber} size={"2x"}/></a>
                    <a href={"https://vk.com/id12667881"}><FontAwesomeIcon icon={faVk} size={"2x"}/></a>
                    <a href={"https://www.instagram.com/yuhee2017/"}><FontAwesomeIcon icon={faInstagram} size={"2x"}/></a>
                    <a href={"https://www.linkedin.com/in/dmitry-yukhimuk-65589324b/"}><FontAwesomeIcon icon={faLinkedin} size={"2x"}/></a>
                    <a href={"https://www.codewars.com/users/Yuhee2020"}><img src={CWIcon}/></a>
                    <a href={"https://www.linkedin.com/in/dmitry-yukhimuk-65589324b/"}><FontAwesomeIcon icon={faGithub} size={"2x"}/></a>

                </div>
            </div>
        </div>
    )
}