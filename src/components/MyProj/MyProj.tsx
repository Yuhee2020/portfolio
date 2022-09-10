import React from "react"
import styles from "./MyProj.module.scss"
import {Proj} from "./Proj/Proj";
import {Title} from "../../common/c2-components/c1-title/title";
import {ProjectType} from "../../App";
//@ts-ignore
import Fade from "react-reveal/Fade"

type MyProjPropsType = {
    projects: ProjectType[]
}

export const MyProj = ({projects}: MyProjPropsType) => {

    const projArr = projects.map(el => <Proj key={el.id} project={el}/>)

    return (
        <div id={"proj"} className={styles.container}>
            <Fade bottom>
                <Title title={"My Projects"}/>
                <div className={styles.projContainer}>
                    {projArr}
                </div>
            </Fade>
        </div>
    )
}