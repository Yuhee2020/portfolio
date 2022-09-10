import React from "react"
import styles from "./Header.module.scss"
import {Nav} from "../Nav/Nav";

export const Header = () => {


    return (
        <header className={styles.container}>
            <Nav/>
        </header>
    )
}