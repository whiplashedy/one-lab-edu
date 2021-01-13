import styles from "./LoginForm.module.css"
import {Field, Form, Formik} from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React, {useState} from "react";
import {Checkbox} from "@material-ui/core";
import * as yup from 'yup';
import {Router, useRouter} from 'next/router'
import jwt from 'jsonwebtoken'

const myValidationSchema = yup.object({
    email: yup.string().required('Required email').email('Invalid email format'),
    password: yup.string().required('Required password').min(8)
})

type Props = {
    message: string
}

type User = {
    email: string,
    password: string
}

let LoginForm: React.FC<Props> = ({message}) => {
    let router: Pick<Router, "isFallback"> = useRouter();
    return (
        <>
            <div className={styles.loginForm}>
                <Formik initialValues={{email: '', password: '', doSave: false, showPassword: false}}
                        validationSchema={myValidationSchema}
                        onSubmit={async (data, {setSubmitting, resetForm, setErrors}) => {
                            setSubmitting(true);
                            console.log(data);
                            const response = await fetch('/api/login', {
                                method: 'POST',
                                headers:{
                                  'Accept' : 'application/json',
                                  'Content-Type' : 'application/json'
                                },
                                body: JSON.stringify({email: data.email, password: data.password})
                            });
                            const resdata = await response.json();
                            const token = resdata.token;
                            if(token){
                                const json = jwt.decode(token) as {[key: string]: string};
                                console.log(json);
                                {!json.isAuth ? alert("USE temp@gmail.com temptemp") : router.push('/loginSuccess')}
                            }

                            setSubmitting(false);
                            resetForm({});
                        }}>
                    {
                        ({values, isSubmitting, handleChange, handleBlur, handleSubmit, errors, setErrors, touched}) => (
                            <Form onSubmit={handleSubmit}>
                                <div>
                                    <TextField
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        label="email"
                                    />
                                </div>
                                {
                                    errors.email && touched.email ? (
                                        <div className={styles.errors}>{errors.email}</div>) : null
                                }
                                <div className={styles.password}>
                                    <TextField
                                        name="password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        label="password"

                                    />

                                    <label className={styles.showPassword}><Field name="showPassword" type="checkbox"
                                                                                  as={Checkbox}/>Показать пароль</label>
                                </div>
                                {
                                    errors.password && touched.password ? (
                                        <div className={styles.errors}>{errors.password}</div>) : null
                                }
                                <div className={styles.doSave}>
                                    <Field name="doSave" type="checkbox" as={Checkbox}/>Запомнить
                                    данные?
                                </div>
                                <div>
                                    <Button disabled={isSubmitting} variant="contained" color="primary"
                                            type="submit">login</Button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </>)
}

export default LoginForm;
