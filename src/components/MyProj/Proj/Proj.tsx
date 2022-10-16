import React from "react"
import styles from "./Proj.module.scss"
import {ProjectType} from "../../../App";
import {Button} from "../../../common/c2-components/c2-button/custom-button";
import Fade from "react-awesome-reveal";



type ProjPropsType = {
    project: ProjectType
}

export const Proj = ({project}: ProjPropsType) => {

    const styleForScreen = {
        backgroundImage: `url(${project.screen})`
    }

    return (
        <div className={styles.container}>
            <div
                className={styles.projScreen}
                style={styleForScreen}
            >


                <Fade>
                <div className={styles.linkBtn}>
                    <Button buttonType={"link"} title={"Open"} url={project.url}/>
                </div>
                </Fade >
            </div>
            <div className={styles.about}>
                <h4>
                    {project.title}
                </h4>
                <p>
                    {project.about}
                </p>
            </div>
        </div>
    )
}