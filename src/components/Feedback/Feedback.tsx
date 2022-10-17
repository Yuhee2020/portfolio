import React, {useState} from "react"
import styles from "./Feedback.module.scss"
import {useFormik} from "formik";
import * as Yup from "yup"
import {Title} from "../../common/c2-components/c1-title/title";
import {Input} from "../../common/c2-components/c3-input/custom-inpt";
import {Textarea} from "../../common/c2-components/c4-textarea/custom-textarea";
import {Button} from "../../common/c2-components/c2-button/custom-button";
import emailjs from '@emailjs/browser';
import {Zoom} from "react-awesome-reveal";

export const Feedback = () => {

    const [sentIsDone, setSentIsDone] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)
    const setIsDone=()=>{
        setSentIsDone(false)
        formik.resetForm()
    }


    const sendEmail = (values:any) => {
        setIsDisabled(true)
        emailjs.send("service_k03ugdc", "template_s5jkg5q", values, "r5mnDYuVToVENU1aP")
            .then((result) => {
                console.log(result);
                setSentIsDone(true)
            }, (error) => {
                console.log(error);
            })
            .finally(() => {
                setIsDisabled(false)
            })
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: ""
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),
            email: Yup.string()
                .email("Must be valid")
                .required("Required"),
            message: Yup.string()
                .max(400, "Must be 400 characters or less")
                .required("Required"),
        }),
        onSubmit: values => {
            console.log(formik)
            sendEmail(values)
        },
    })

    return (

        <div id={"feedback"} className={styles.container}>

                <Title title={"Feedback"}/>
                <div className={styles.feedbackContainer}>
                    <Zoom>
                    <div className={styles.formContainer}>
                        {!sentIsDone &&
                        <>
                            <h4>Say Hello <span>;)</span></h4>

                            <form  className={styles.form} onSubmit={formik.handleSubmit}>
                                <Input
                                    placeholder={"Name"}
                                    {...formik.getFieldProps("name")}
                                    errorMessage={formik.touched.name && formik.errors.name ? formik.errors.name : ""}
                                />
                                <Input
                                    placeholder={"Email"}
                                    {...formik.getFieldProps("email")}
                                    errorMessage={formik.touched.email && formik.errors.email ? formik.errors.email : ""}
                                />
                                <Textarea
                                    placeholder={"Message"}
                                    {...formik.getFieldProps("message")}
                                    errorMessage={formik.touched.message && formik.errors.message ? formik.errors.message : ""}
                                />
                                <Button
                                    disabled={isDisabled}
                                    type={"submit"}
                                    title={"Send"}
                                    buttonType={"button"}
                                />
                            </form>
                        </>
                        }
                        {sentIsDone &&
                        <div className={styles.mesSent}>
                            <h4 className={styles.messageDone}>Message has been sent ! <br/>
                                <div>I will reply as soon as I can</div>
                                <Button buttonType={"button"} callback={setIsDone} title={"🗙"}/>
                            </h4>

                        </div>
                        }
                    </div>
                        </Zoom>
                </div>
        </div>
    )
}