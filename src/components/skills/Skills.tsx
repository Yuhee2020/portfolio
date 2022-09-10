import React from "react"
import styles from "./Skills.module.scss"
import {Skill} from "./Skill/Skill";
import {Title} from "../../common/c2-components/c1-title/title";
import {SkillType} from "../../App";
//@ts-ignore
import Fade from "react-reveal/Fade"

type SkillsPropsType = {
    skills: SkillType[]
}

export const Skills = ({skills}: SkillsPropsType) => {

    const skillsArr = skills.map(el => <Skill key={el.id} skill={el}/>)

    return (
        <div id={"skills"} className={styles.container}>
            <Fade bottom>
                <Title title={"My Skills"}/>

                <div className={styles.skillsContainer}>
                    {skillsArr}
                </div>
            </Fade>
        </div>
    )
}