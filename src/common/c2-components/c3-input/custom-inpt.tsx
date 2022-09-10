import React, {DetailedHTMLProps, InputHTMLAttributes} from "react"
import styles from "./custom-inpt.module.scss"
import {Error} from "../c5-error/error";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>


type CustomInputPropsType = DefaultInputPropsType & {
    errorMessage?: string
}


export const Input = ({errorMessage, ...params}: CustomInputPropsType) => {
    return (
        <div className={styles.container}>
            <input
                {...params}
            />
            {errorMessage && <Error errorMessage={errorMessage}/>}
        </div>
    )
}