import React from "react";
import s from "./Footer.module.css"
import sC from "../common/styles/Container.module.css"



export const Footer = () => {
    return <div className={s.footerBlock}>
        <div className={`${sC.container} ${s.footerContainer}`}>
            <h4 className={s.title}>Yukhimuk Dzmitry</h4>
            <div className={s.socialsContainer}>
                <div className={s.social}></div>
                <div className={s.social}></div>
                <div className={s.social}></div>
                <div className={s.social}></div>
            </div>
            <h4 className={s.title}>All rights reserved</h4>
        </div>

    </div>
}