import React from 'react';
import {useNavigate} from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'


const loginSchema = Yup.object().shape(
    {
        email: Yup.string().email('Invalid Email format').required('Email is required'),
        password: Yup.string().required('Password is required')
    }
)

const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    const navigate = useNavigate()
    
    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                 /*Initial values that formik take */
                initialValues={initialCredentials}
                //***Yup validation */
                validationSchema = {loginSchema}
                /*on submit event */
                onSubmit = {async(values) => {
                        await new Promise ((r) => setTimeout(r,1000))
                        alert(JSON.stringify(values, null, 2))
                        // we save the data in the localstorage(se queda siemre eprmanente guardado)
                        await localStorage.setItem('credentials', values)
                        navigate('/profile')
                }}
            >
            {/*We obtain props from formik */}

            {({ errors, 
                touched, 
                isSubmitting, 
                values, 
                handleChange,
                handleBlur }) => (                    
                        <Form>
                            <label htmlFor="email">Email</label>
                            <Field id="email" type="email" name="email" placeholder="example@email.com" />
                            {
                                errors.email && touched.email && (
                                     <ErrorMessage name='email' component='div'></ErrorMessage>                               
                                )
                            }

                            <label htmlFor="password">Password</label>
                            <Field
                                id="password"
                                name="password"
                                placeholder="password"
                                type="password"
                            />
                            {
                                errors.password && touched.password && (                                    
                                     <ErrorMessage name='password' component='div'></ErrorMessage>            
                                )
                            }
                            <button type="submit">Login</button>
                            {isSubmitting ? (<p>Login your credentials</p>) : null}
                        </Form>
                    )}
            </Formik>
            
        </div>   
    );
}

export default LoginFormik;
