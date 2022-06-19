import React from "react";
import s from "./Main.module.css"
import sC from "../common/styles/Container.module.css"

export const Main=()=>{
    return <div className={s.main}>
        <div className={sC.container}>
        <div className={s.text}>
            <span>Hi There</span>
            <h1>I am Yukhimuk Dzmitry</h1>
            <p>Front-end developer</p>
        </div>
        <div className={s.photo}></div>
        </div>
    </div>
}