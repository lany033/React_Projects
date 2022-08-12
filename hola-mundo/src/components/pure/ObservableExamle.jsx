import React, {useState} from 'react';
import { getNumbers } from '../../services/observableService';
import { Button } from '@mui/material';

const ObservableExamle = () => {

    const [number, setNumber] = useState(0);

    const obtainNewNumbers = () => {
        console.log('Subscription to observable');
        getNumbers.subscribe(
            {
                next(newNumber){
                    console.log('New number: ', newNumber);
                    setNumber(newNumber);
                },
                error(error){
                    alert(`Something went wrong: ${error}`)
                },
                complete(){
                    alert(`Finished with: ${number}`)
                    console.log('Done with the observable');
                }
            }
        )
        
    }

    return (
        <div>
            <h2>Number: {number}</h2>
            <Button variant="contained" onClick={obtainNewNumbers}>obtain New Numbers</Button>
        </div>
    );
}

export default ObservableExamle;
