import { Button } from '@mui/material';
import React, {useState, useEffect} from 'react';
import {getRandomUser} from '../../services/axiosService';

const AxiosExample = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
      obtainUser()
    }, [])

    const obtainUser = () => {
        getRandomUser()
            .then((response) => {
                if (response.status === 200) {
                setUser(response.data.results[0])
                }
            })
            .catch((error) => {
                alert(`Error  ${error}`)
            })
    }
    
    return (
        <div>
            <h1>Axios Example</h1>
            { user !== null  ? 
            (<div>
                <img alt='avatar' src={user.picture.large}/>
                <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
                <h3>{user.email}</h3>
            </div>) 
            : (<div>
                <p>Generate a new user</p>
                <Button variant="contained" onClick={obtainUser}>Random user</Button>
            </div>)}
            
        </div>
    );
}

export default AxiosExample;
