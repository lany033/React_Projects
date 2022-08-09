import React from 'react';
import {useNavigate} from 'react-router-dom'

const ProfilePage = ({user}) => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    const goTasks = () => {
        navigate('/tasks')
    }

    return (
        <div>
            <h1>Your profile</h1>
            <button onClick={goTasks}>Tasks</button>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
}

export default ProfilePage;
