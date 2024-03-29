import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react"
import styles from "./custom-button.module.scss"

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonType = "link" | "button"

type CustomButtonPropsType = DefaultButtonPropsType & {
    type?: "button" | "submit" | "reset" | undefined
    buttonType: ButtonType
    title: string
    url?: string
    callback?:()=>void

}


export const Button = ({type, buttonType, title, url, callback}: CustomButtonPropsType) => {

    if (buttonType === "link") {
        return (
            <div className={styles.btnContainer}>
                <a className={styles.element} href={`${url}`}>
                    {title}
                </a>
            </div>
        )
    }
    return (
        <div className={styles.btnContainer}>
            <button type={type ? type : "button"} onClick={callback} className={styles.element}>
                {title}
            </button>
        </div>
    )
}