import React from "react"
import styles from "./Footer.module.scss"

export const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <p>Copyright © 2022 Dmitry Yukhimuk. All rights reserved</p>
            </div>
        </div>
    )
}