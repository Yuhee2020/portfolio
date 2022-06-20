import React from "react";
import s from "./Projects.module.css"
import sC from "../common/styles/Container.module.css"
import {Project} from "./Project/Project";



export const Projects = () => {
    return <div className={s.projectsBlock}>
        <div className={`${sC.container} ${s.projectsContainer}`}>
            <h2 className={s.title}>My projects</h2>
            <div className={s.projects}>
                <Project title={"TodoList"} description={"project\n" +
                    "проект, программа, план, стройка, строительный объект, осуществляемое строительство"}/>
                <Project title={"Social Network"} description={"project\n" +
                    "проект, программа, план, стройка, строительный объект, осуществляемое строительство"}/>

            </div>
        </div>

    </div>
}