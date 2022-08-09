import React from 'react';
import {useNavigate} from 'react-router-dom'

const NotFoundPage = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <h1>404 - Not Found</h1>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
}

export default NotFoundPage;
