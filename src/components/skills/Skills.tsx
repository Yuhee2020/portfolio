import React from "react";
import s from "./Skills.module.css"
import sC from "../common/styles/Container.module.css"
import {Skill} from "./skill/Skill";


export const Skills = () => {
    return <div className={s.skillsBlock}>
        <div className={`${sC.container} ${s.skillsContainer}`}>
            <h2 className={s.title}>My skills</h2>
            <div className={s.skills}>
                <Skill title={"JS"} description={"xsdfsdfsdf"}/>
                <Skill title={"HTML"} description={"sdfsdfsdfsdfsdf"}/>
                <Skill title={"React"} description={"sdfsdfsdfsdfsdf"}/>
            </div>
        </div>

    </div>
}