import React from "react";
import styles from "./App.module.scss"
import {Header} from "./Components/Header/Header";
import {Skills} from "./Components/Skills/Skills";
import {Main} from "./Components/Main/Main";
import {MyProj} from "./Components/MyProj/MyProj";
import {Feedback} from "./Components/Feedback/Feedback";
import {Footer} from "./Components/Footer/Footer";
import {faCss3Alt, faFontAwesome, faHtml5, faJsSquare, faReact} from "@fortawesome/free-brands-svg-icons"
import webSocialPrev from "./common/c3-img/63127038-62273800-bf7f-11e9-914f-bd1c431c76f2.png"
import PandC from "./common/c3-img/PandC.png"
import myTodo from "./common/c3-img/myToDo.png"

export type SkillType = {
    id: string
    titleIcon: any
    iconColor: string
    about: string
}
export type ProjectType = {
    id: string
    title: string
    screen: any
    about: string
    url: string
}
export type BllType = {
    skills: SkillType[]
    projects: ProjectType[]
}

export const App = () => {

    const bll: BllType = {
        skills: [
            {
                id: "JavaScript",
                titleIcon: faJsSquare,
                iconColor: "#EFD81D",
                about: "I use JavaScript with TypeScript."
            },
            {
                id: "React",
                titleIcon: faReact,
                iconColor: "#61DAFB",
                about: "I prefer to use React in conjunction with Redux (Toolkit). Redux-Thunk"
            },
            {
                id: "CSS",
                titleIcon: faCss3Alt,
                iconColor: "blue",
                about: "CSS3, Scss, MUI"
            },
            {
                id: "HTML",
                titleIcon: faHtml5,
                iconColor: "red",
                about: "HTML5"
            },
            {
                id: "Other",
                titleIcon: faFontAwesome,
                iconColor: "#00b074",
                about: "Also: Axios, REST API, Unit Tests (Jest), Storybook, Git"
            },
        ],

        projects: [
            {
                id: "Packs and Cards",
                title: "Packs and Cards",
                screen: PandC,
                about: "TypeScript, React, Redux, Router-dom, Redux-thunk, Mui, Axios, Formik, Bug fixing, deploying, Teamwork",
                url: "https://yuhee2020.github.io/packs-and-cards/"
            },
            {
                id: "MyToDo",
                title: "MyToDo",
                screen: myTodo,
                about: "TypeScript, React, Redux Toolkit, Redux-thunk, Router-dom, Axios, Mui, Formik, Storybook; Bug fixing, deploying; Covering code with unit tests.",
                url: "https://yuhee2020.github.io/mytodo/"
            },
            {
                id: "SN",
                title: "SN",
                screen: webSocialPrev,
                about: "TypeScript, React, Redux Toolkit, Redux-thunk, Router-dom, Axios, Mui for some component, SCSS, Formik; Bug fixing, deploying.",
                url: "https://yuhee2020.github.io/SN/"
            }
        ]
    }

    return (
        <div>
            <Header/>
            <div className={styles.container}>
                <Main/>
                <Skills skills={bll.skills}/>
                <MyProj projects={bll.projects}/>
                <Feedback/>
                <Footer/>
            </div>
        </div>

    );
}
