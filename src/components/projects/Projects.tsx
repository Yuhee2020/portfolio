import React from "react";
import s from "./Projects.module.css"
import sC from "../common/styles/Container.module.css"
import {Project} from "./Project/Project";
import {Title} from "../title/Title";
import  SNPic from "../../images/63127038-62273800-bf7f-11e9-914f-bd1c431c76f2.png"
import todoPic from "../../images/getty_623425276_351576.jpg"


export const Projects = () => {
    const social={
        backgroundImage: `url(${SNPic})`
    }
    const todo={
        backgroundImage: `url(${todoPic})`
    }

    return <div className={s.projectsBlock}>
        <div className={`${sC.container} ${s.projectsContainer}`}>
            <Title title={'My projects'}/>
            <div className={s.projects}>
                <Project  style={todo} title={"TodoList"}  description={"project\n" +
                    "проект, программа, план, стройка, строительный объект, осуществляемое строительство"}/>
                <Project style={social}  title={"Social Network"} description={"project\n" +
                    "проект, программа, план, стройка, строительный объект, осуществляемое строительство"}/>

            </div>
        </div>

    </div>
}