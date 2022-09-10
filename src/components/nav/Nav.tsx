import React from "react"
import styles from "./Nav.module.scss";
import {Link} from "react-scroll";


export const Nav = () => {
    return (
        <div className={styles.table}>
            <div className={styles.cell}>
                <ul className={styles.dots}>
                    <li><Link
                        activeClass={styles.active}
                        to="main"
                        spy={true}
                        smooth={true}
                        offset={-20}
                        duration={500}
                    /></li>

                    <li><Link
                        activeClass={styles.active}
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-20}
                        duration={500}
                    /></li>
                    <li><Link
                        activeClass={styles.active}
                        to="proj"
                        spy={true}
                        smooth={true}
                        offset={-20}
                        duration={500}
                    /></li>
                    <li><Link
                        activeClass={styles.active}
                        to="feedback"
                        spy={true}
                        smooth={true}
                        offset={-20}
                        duration={500}
                    /></li>
                </ul>
            </div>
        </div>

    )
}