import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom'
import Copyright from '../../components/pure/Copyright';

const Dashboard = () => {

    const navigate = useNavigate()

    const logout = () => {
        navigate('/login')
    }

    return (
        <div>
            <Button variant="contained" onClick={logout}>Logout</Button>
            <Copyright></Copyright>
        </div>
    );
}

export default Dashboard;
