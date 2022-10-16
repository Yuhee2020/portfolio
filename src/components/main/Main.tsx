import React, {useCallback} from "react"
import styles from "./Main.module.scss"
import myPhoto from "../../common/c3-img/20200908_155403 (2).jpg"
import ReactTypingEffect from 'react-typing-effect'
// @ts-ignore
import LightSpeed from "react-reveal/Fade"
// @ts-ignore
import Particles, { ISourceOptions } from "react-tsparticles";
import {loadFull} from "tsparticles";
import { Engine } from "tsparticles-engine"


export const Main = () => {

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    return (

            <div id={"main"} className={styles.container}>
                <Particles className={styles.particles}
                    id="tsparticles"
                           init={particlesInit}
                           options={{
                               fullScreen: false,
                               background: {
                               },
                               fpsLimit: 200,
                               interactivity: {
                                   events: {
                                       onClick: {
                                           enable: true,
                                           mode: "push",
                                       },
                                       onHover: {
                                           enable: true,
                                           mode: "repulse",
                                       },
                                       resize: true,
                                   },
                                   modes: {
                                       push: {
                                           quantity: 3,
                                       },
                                       repulse: {
                                           distance: 100,
                                           duration: 0.4,
                                       },
                                   },
                               },
                               particles: {
                                   color: {
                                       value: "#2b3940",
                                   },
                                   links: {
                                       color: "#00b074",
                                       distance: 150,
                                       enable: true,
                                       opacity: 0.5,
                                       width: 1,
                                   },
                                   collisions: {
                                       enable: true,
                                   },
                                   move: {
                                       direction: "none",
                                       enable: true,
                                       outModes: {
                                           default: "bounce",
                                       },
                                       random: false,
                                       speed: 2,
                                       straight: false,
                                   },
                                   number: {
                                       density: {
                                           enable: true,
                                           area: 800,
                                       },
                                       value: 80,
                                   },
                                   shape: {
                                       type: "circle",
                                   },
                                   size: {
                                       value: { min: 1, max: 5 },
                                   },
                               },
                               detectRetina: true,
                           }}
                />
                <div className={styles.contentContainer}>
                    <img src={myPhoto} alt="Author"/>
                    <LightSpeed left>
                        <h1>
                            Hi, I'm Yukhimuk Dmitry!
                        </h1>
                    </LightSpeed>
                    <div className={styles.aboutMe}>
                        <ReactTypingEffect text={["Front-end developer"]}/>
                    </div>
                </div>
            </div>
    )
}