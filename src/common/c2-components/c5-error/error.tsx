import React from "react"
import styles from "./error.module.scss"

type ErrorPropsType = {
    errorMessage: string
}

export const Error = ({errorMessage}: ErrorPropsType) => {
    return(
        <div className={styles.error}>
            {errorMessage}
        </div>
    )
}