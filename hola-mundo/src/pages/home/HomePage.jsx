
import React from 'react';
import {useNavigate,useLocation} from 'react-router-dom'

const HomePage = () => {
    const location = useLocation()
    const navigate = useNavigate()

    console.log('We are in route:', location.pathname);

    const goProfile = () => {
        navigate('/profile')
    }

    const navigateProps = () => {
        navigate({
            pathname: '/online-state',
            search: '?online = true',
            state: {
                online: true
            }
        })
    }

    return (
        <div>
            <h1>HomePage</h1>
            
            <div>
                <button onClick={navigateProps}>Go Page with state</button>
                <button onClick={goProfile}>Go Profile</button>
            </div>
        </div>
    );
}

export default HomePage;
