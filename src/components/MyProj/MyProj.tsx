import React from "react"
import styles from "./MyProj.module.scss"
import {Proj} from "./Proj/Proj";
import {Title} from "../../common/c2-components/c1-title/title";
import {ProjectType} from "../../App";
import Fade from "react-awesome-reveal";


type MyProjPropsType = {
    projects: ProjectType[]
}

export const MyProj = ({projects}: MyProjPropsType) => {

    const projArr = projects.map(el => <Proj key={el.id} project={el}/>)

    return (
        <div id={"proj"} className={styles.container}>
            <Fade cascade>
                <Title title={"My Projects"}/>
                <div className={styles.projContainer}>
                    {projArr}
                </div>
            </Fade>
        </div>
    )
}