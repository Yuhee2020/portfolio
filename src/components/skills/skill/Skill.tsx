import React from "react"
import styles from "./Skill.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {SkillType} from "../../../App";

type SkillPropsType = {
    skill: SkillType
}

export const Skill = ({skill}: SkillPropsType) => {
    return (
        <div className={styles.skillContainer}>
            <FontAwesomeIcon
                icon={skill.titleIcon}
                color={skill.iconColor}
                size={"5x"}
            />
            <p>
                {skill.about}
            </p>
        </div>
    )
}