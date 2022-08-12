import React from 'react';
import { Button } from '@mui/material';

const AsyncExample = () => {

    async function generateNumber() {
        return 1
    }

    async function generatePromiseNumber() {
        return Promise.resolve(2)
    }

    function obtainNumber() {
        generateNumber()
            .then((response) => alert(`Response: ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    function obtainPromiseNumber() {
        generatePromiseNumber().then((response) => alert(`Response: ${response}`))
    }

    async function saveSessionStorage(key, value) {
        sessionStorage.setItem(key,value) //Se pone el await en aquellos puntos en q deseemos q se detenga la ejecucion

        return Promise.resolve(sessionStorage.getItem(key))
    }

    function showStorage() {
        saveSessionStorage('name', 'Melanie')
        .then((response) => {
            let value = response
            alert(`Saved name: ${value}`)})
        .catch((error) => {
            alert(`Something went wrong: ${error}`)
        })
        .finally(() => console.log('name saved at retrieved success'))
    }

    async function obtainMessage() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Hello world'), 2000)

        })

        let message = await promise

        await alert(`Message received: ${message}`)
    }

    const returnError = async() => {
        await Promise.reject(new Error('Oooops'))
    }

    const consumeError = () => {
        returnError()
        .then((response) => alert(`Everything is OK: ${response}`))
        .catch((error) => alert(`Something went wrong: ${error}`))
        .finally(() => alert(`Finally executed`))
    }

    const urlNotFound = async () => {

        try {
            let response = await fetch('https://invalidURL')
            alert(`Response: ${JSON.stringify(response)}`)
        } catch (error) {
            alert(`Something went wrong: ${error} (check your console)`)
        }
    }

    const multiplePromise = async () => {
        let results = await Promise.all(
            {
                // fetch('https://reqres.in/api/users'),
                // fetch('https://reqres.in/api/users?page=2'),
            }
        ).catch((error) => alert(`Something went wrong: ${error} (check your console)`))
    }

    return (
        <div>
            <Button variant="contained" onClick={obtainNumber}>Obtain number</Button>
            <Button variant="contained" onClick={obtainPromiseNumber}>Obtain promise number</Button>
            <Button variant="contained" onClick={showStorage}>Save name and show</Button>
            <Button variant="contained" onClick={obtainMessage}>Receive message in 2 seconds</Button>
            <Button variant="contained" onClick={consumeError}>Obtain error</Button>
            <Button variant="contained" onClick={urlNotFound}>Request to unknown URL</Button>
            <Button variant="contained" onClick={multiplePromise}>Multiple promises</Button>
        </div>
    );
}

export default AsyncExample;
