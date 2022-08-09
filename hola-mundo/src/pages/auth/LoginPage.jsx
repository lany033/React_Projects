import React from 'react';
import LoginFormik from '../../components/pure/forms/loginFormik';
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';

const LoginPage = () => {
    
    const navigate = useNavigate()

    const goRegister = () => {
        navigate('/register')
    }

    return (
        <div>
            <h1>Login Page</h1>
            <LoginFormik></LoginFormik>
            <div>
                <Button variant="contained" onClick={goRegister}>Registro</Button>
            </div>
        </div>
    );
}

export default LoginPage;
