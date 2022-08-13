import { Button } from '@mui/material';
import React, {useState, useEffect} from 'react';
import { getRandomJoke } from '../../services/axiosService';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import Chip from '@mui/material/Chip';
import Favorites from './Favorites';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';



const RandomJoke = () => {

    const [joke, setJoke] = useState(null);
    const [IDL, setIDL] = useState([]);
    const [IDD, setIDD] = useState([]);

    
    useEffect(() => {
        obtainJoke()
    }, []);

    const obtainJoke = () => {
        getRandomJoke()
            .then((response) => {
                if(response.status === 200 ){
                    setJoke(response.data)
                }
            })
            .catch((error) => {
                alert(`Error ${error}`)
            })
    }

    const obtainJokeLikeID = () => {
        if (!IDL.includes(joke.id)) {
            console.log(joke.id);
            const tempID = [...IDL]
            tempID.push(joke.id)
            setIDL(tempID)
            console.log(IDL);
        } else {
            console.log('ya esta incluido');
        }
    }

    const obtainJokeDislikeID = () => {
        if (!IDD.includes(joke.id)) {
            console.log(joke.id);
            const tempID = [...IDD]
            tempID.push(joke.id)
            setIDD(tempID)
            console.log(IDD);
        } else {
            console.log('ya esta incluido');
        }
    }

    return (
        <div className='pCards'>
            <Typography variant='h3' >Random Chuck Norris Jokes</Typography>
            { joke != null ? 
            (
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://w7.pngwing.com/pngs/646/272/png-transparent-chuck-norris-karate-kommandos-chuck-norris-celebrities-hand-cartoon.png"
                        alt="icon"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        {joke.value}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Stack direction="row" spacing={8}>
                            <Stack direction="row" spacing={1}>
                                <IconButton aria-label="add to favorites" onClick={obtainJokeLikeID}>
                                    <SentimentVerySatisfiedIcon/>  
                                </IconButton>
                                <IconButton aria-label="add to dislikes" onClick={obtainJokeDislikeID}>
                                    <SentimentVeryDissatisfiedIcon/>
                                </IconButton>
                            </Stack>
                                <Chip label="Get a new Joke" onClick={obtainJoke} color='success'></Chip>
                        </Stack>  
                    </CardActions>
                </Card>    
            ) 
            : (<div>
                <p>Press button for new joke</p>
                <Button variant="contained" onClick={obtainJoke}>Get a new Joke</Button>
            </div>)}
            <Stack direction="row" spacing={1}>
                <Chip avatar={<Avatar>{IDL.length}</Avatar>} label="Likes" color='primary' />
                <Chip avatar={<Avatar>{IDD.length}</Avatar>} label="Dislikes" />
                
            </Stack>
        </div>
    );
}

export default RandomJoke;
