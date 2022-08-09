import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';
import { Button } from '@mui/material';

const RegisterFormik = () => {

    const navigate = useNavigate()

    const login = () => {
        navigate('/login')
    }

    let user = new User()

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string().min(6, 'Username too short').max(12, 'Username too long').required('Username is required'),
            email: Yup.string().email('Invalid Email format').required('Email is required'),
            role: Yup.string().oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a role: user/admin').required('Rol is required'),
            password: Yup.string().min(8, 'Password too short').required('Password is required'),
            confirm: Yup.string().when("password",{ is: value => (value && value.length > 0 ? true : false), then: Yup.string().oneOf([Yup.ref('password')], 'Password must match!')}).required('You must confirm the password')
        }
    )

    const submit = () => {
        alert('register user');
    }

    return (
        <div>
           <h4>Register Formik</h4> 
           <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit = {async(values) => {
                    await new Promise ((r) => setTimeout(r,1000))
                    alert(JSON.stringify(values, null, 2))
                }}
           >
           {({ errors, 
                touched, 
                isSubmitting, 
                values, 
                handleChange,
                handleBlur }) => ( 
                    <Form>
                        <label htmlFor="username">Username</label>
                        <Field id="username" type="text" name="username" placeholder="Your username" />
                        {
                            errors.username && touched.username && (
                                <ErrorMessage name='username' component='div'></ErrorMessage>                               
                            )
                        }
                        <label htmlFor="email">Email</label>
                            <Field id="email" type="email" name="email" placeholder="example@email.com" />
                            {
                                errors.email && touched.email && (
                                     <ErrorMessage name='email' component='div'></ErrorMessage>                               
                                )
                            }

                        <label htmlFor="password">Email</label>
                        <Field id="password" type="password" name="password" placeholder="password" />
                        {
                            errors.password && touched.password && (                                    
                                <ErrorMessage name='password' component='div'></ErrorMessage>            
                            )
                        }
                        <label htmlFor="confirm">Confirm Password</label>
                        <Field id="confirm" type="passowrd" name="password" placeholder="confirm password" />
                        {
                            errors.confirm && touched.confirm && (                                    
                                <ErrorMessage name='confirm' component='div'></ErrorMessage>            
                            )
                        }
                        <button type="submit">Register account</button>
                        {isSubmitting ? (<p>Sending yours credentials</p>) : null}
                    </Form>
                )}
           </Formik>
           <Button variant="contained" onClick={login}>Login</Button>
        </div>
    );
}

export default RegisterFormik;
