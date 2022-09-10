import React from "react"
import styles from "./title.module.scss"

type TitleType = {
    title: string
}

export const Title = ({title}: TitleType) => {
    return (
        <div className={styles.container}>
            <h1>
                {title}
            </h1>
            <span></span>
        </div>
    )
}