import React from "react";
import s from "./Project.module.css"

type PropsType={
    title: string
    description: string
    style?: any
}

export const Project = (props:PropsType) => {
    return <div className={s.project} >
        <a href="http://google.com">
        <div className={s.image} style={props.style}>
           {/* <div className={s.show}><a href={""}>Show more</a></div>*/}
        </div>

        <h3>{props.title}</h3>
        <span className={s.description}>{props.description}</span>
        </a>
    </div>
}