import { Button } from '@mui/material';
import React from 'react';
import { login, getAllPagedUsers, getAllUsers, getUsersByID, createUser, updateUser, deleteUsersByID } from '../../services/axiosCRUDService';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'


const AxiosCRUDExample = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    const loginSchema = Yup.object().shape(
        {
            email: Yup.string().email('Invalid Email format').required('Email is required'),
            password: Yup.string().required('Password is required')
        }
    )

    const authUser = (values) => {
        login(values.email, values.password)
            .then((response) => {
                if (response.data.token) {
                    alert(JSON.stringify(response.data.token))
                    sessionStorage.setItem('token', response.data.token)
                } else {
                    sessionStorage.removeItem('token')
                    throw new Error('Login failure')
                }
                
            })
            .catch((error) => {
                alert(`Something went wrong ${error}`)
                sessionStorage.removeItem('token')
            })
            .finally(() => console.log('Login done'))
    }

    //CRUD EXAMPLES
    const obtainAllUsers = () => {
        getAllUsers()
            .then((response) => {
                alert(JSON.stringify(response.data.data))
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    const obtainAllPagedUsers = (page) => {
        getAllPagedUsers(page)
            .then((response) => {
                if(response.data.data && response.status === 200){
                    alert(JSON.stringify(response.data.data))
                }else {
                    throw new Error('not users found')
                }
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    const obtainUserById = (id) => {
        getUsersByID(id)
            .then((response) => {
                if(response.data.data && response.status === 200){
                    alert(JSON.stringify(response.data.data))
                }else {
                    throw new Error('user not found')
                }
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    const updateUserById = (id,name,job) => {
        updateUser(id,name,job)
            .then((response) => {
                if(response.data && response.status === 200){
                    alert(JSON.stringify(response.data))
                }else {
                    throw new Error('user not found')
                }
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    const deleteUser = (id) => {
        deleteUsersByID(id)
            .then((response) => {
                if(response.status === 204){
                    alert(`User with id: ${id} was deleted`)
                }else {
                    throw new Error('user not found')
                }
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    const createNewUser = (name,job) => {
        createUser(name,job)
        .then((response) => {
            if(response.data && response.status === 201){
                alert(JSON.stringify(response.data))
            }else {
                throw new Error('user not created')
            }
            
        })
        .catch((error) => alert(`Something went wrong: ${error}`))
    }

    return (
        <div>
            <Formik
                 /*Initial values that formik take */
                initialValues={initialCredentials}
                //***Yup validation */
                validationSchema = {loginSchema}
                /*on submit event */
                onSubmit = {async(values) => {
                    authUser(values)
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
                            <Button type="submit">Login</Button>
                            {isSubmitting ? (<p>Login your credentials</p>) : null}
                        </Form>
                    )}
            </Formik>
            {/* example buttons to test API responds */}
            <div>
                <Button onClick={obtainAllUsers}>Get all users with axios</Button>
                <Button onClick={() => obtainAllPagedUsers(1)}>Get all users (Page 1) with axios</Button>
                <Button onClick={() => obtainUserById(1)}>Get user 1</Button>
                <Button onClick={() => createNewUser('morpheus','leader')}>Create user</Button>
                <Button onClick={() => updateUserById(1,'morpheus','leader')}>Update user</Button>
                <Button onClick={() => deleteUser(1)}>Delete user</Button>
            </div>
        </div>
    );
}

export default AxiosCRUDExample;
