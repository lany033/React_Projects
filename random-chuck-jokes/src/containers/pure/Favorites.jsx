import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { getRandomJoke } from '../../services/axiosService';

const Favorites = () => {

    const [ID, setID] = useState(0);

    const obtainJokeID = () => {
        getRandomJoke()
            .then((response) => {
                if(response.status === 200 ){
                    setID(response.data)      
                }
            })
            .catch((error) => {
                alert(`Error ${error}`)
            })
    }

    return (
        <Stack direction="row" spacing={1}>
            <Chip avatar={<Avatar>M</Avatar>} label="Likes" color='primary' onClick={obtainJokeID}/>
            <Chip avatar={<Avatar>M</Avatar>} label="Dislikes" onClick={obtainJokeID}/>
            <p>{ID.id}</p>
        </Stack>
    );
}

export default Favorites;
