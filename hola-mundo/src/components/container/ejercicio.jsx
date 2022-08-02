import React, { Component, useState, useEffect } from 'react'
//import ‘../../styles/clock.scss’;


export const Clock = () => {

    const datosIniciales = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    }

    const [datos, setDatos] = useState(datosIniciales);
   
    const tick = () => {
        setDatos({
            edad: datos.edad+1
        })
    }

    
    useEffect(() => {
        const intervalID = setInterval(() => {
            tick()
        }, 1000)
        return () => {
            clearInterval(intervalID)
        };
    }, []);
    
    
    return (
        <div>
            <h2>Hora Actual:{datos.fecha}</h2>
            <h3>{datos.nombre} {datos.apellidos}</h3>
            <h1>Edad: {datos.edad}</h1>
        </div>
    );
}

