import React, {useCallback} from "react"
import styles from "./Main.module.scss"
import myPhoto from "../../common/c3-img/3.jpg"
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import { Engine } from "tsparticles-engine"
import ReactTypingEffect from "react-typing-effect";
import {Zoom} from "react-awesome-reveal";


export const Main = () => {

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const options:any={
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
    }

    return (

            <div id={"main"} className={styles.container}>
                <Particles className={styles.particles}
                    id="tsparticles"
                           init={particlesInit}
                           options={options}
                />
                <div className={styles.contentContainer}>
                    <Zoom duration={3000}><img src={myPhoto} alt="Author"/></Zoom>
                        <h1>
                            Hi, I'm Yukhimuk Dmitry!
                        </h1>
                    <div className={styles.aboutMe}>
                        <ReactTypingEffect text={["Front-end developer"]}/>
                    </div>
                </div>
            </div>
    )
}