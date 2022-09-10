import React, {DetailedHTMLProps, TextareaHTMLAttributes} from "react"
import styles from "./custom-textarea.module.scss"
import {Error} from "../c5-error/error";

type DefaultInputPropsType = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

type CustomTextAreaPropsType = DefaultInputPropsType & {
    errorMessage?: string
}

export const Textarea = ({errorMessage, ...params}: CustomTextAreaPropsType) => {
    return (
        <div className={styles.container}>
            <textarea
                {...params}
            />
            {errorMessage && <Error errorMessage={errorMessage}/>}
        </div>
    )
}