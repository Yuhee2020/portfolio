import React from "react";
import s from "./Contacts.module.css"
import sC from "../common/styles/Container.module.css"


export const Contacts = () => {
    return <div className={s.contactsBlock}>
        <div className={`${sC.container} ${s.contactsContainer}`}>
            <h3>Contacts</h3>
            <form className={s.contactsForm}>
                <input type={"text"}/>
                <input type={"text"}/>
                <textarea></textarea>
            </form>
            <div className={s.send}><a href={""}>Send</a></div>
        </div>

    </div>
}