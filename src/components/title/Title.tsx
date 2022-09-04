import React from 'react';
import s from "./Title.module.css";
type PropsType={
    title:string
}
export const Title = (props:PropsType) => {
    return (
        <div className={s.title}>
            <h1 >{props.title}</h1>
        </div>
    );
};

