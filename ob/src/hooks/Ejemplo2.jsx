import { useState, useEffect, useRef } from "react"

// Ejemplo de uso de:
// - useState()
// - useRef()
// - useEffect()

import React from 'react';

const Ejemplo2 = () => {
    //Vamos a craear 2 contadores distintos cada uno en uno estado diferente
    const [contador1, setContador1] = useState(0)
    const [contador2, setContador2] = useState(0);

    //vamos a crear una referencia con useRef() para asociar una variable con un elemento del DOM (vista HTML)

    const miRef = useRef()

    function incrementar1() {
        setContador1(contador1 + 1)
    }

    function incrementar2() {
        setContador2(contador2 + 1)
    }

    //Trabajando con useEffect

    //CASO 1 : EJECUTAR SIEMPRE UN SNIPPET DE CODIGO
    //cada vez que haya un cambio en el estado del componente se ejecuta aquello que este dentro del useeffect()

    // useEffect(() => {
    //     console.log('Cambio en el estado del componente')
    //     console.log('Cambio en el estado del componente')
    //     console.log(miRef)
    // });

    //CASO 2 : SOLO CUANDO CAMBIE CONTADOR 1 
    //Cada vez que haya un cambio en el contador1 se ejecute el useeffect()
    //En caso de que cambie el contador 2 no habra ejecucion

    // useEffect(() => {
    //     console.log('Cambio en el estado del componente')
    //     console.log('Mostrando referencia a elemento del DOM')
    //     console.log(miRef)
    // },[contador1]);


    //CASO 3 : SOLO CUANDO CAMBIE CONTADOR 1 o CONTADOR 2
    //Cada vez que haya un cambio en el contador1 se ejecute el useeffect()
    //En caso de que cambie el contador 2 no habra ejecucion

    // useEffect(() => {
    //     console.log('Cambio en el estado del componente 1 / CONTADOR 2')
    //     console.log('Mostrando referencia a elemento del DOM')
    //     console.log(miRef)
    // },[contador1, contador2]);

    return (
        <div>
            <h1>*** Ejemplo de useState(), useRef() y useEffect() ***</h1>
            <h2>CONTADOR 1: {contador1}</h2>
            <h2>CONTADOR 2: {contador2}</h2>
            {/* ELEMENTO REFERENCIADO */}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            {/* Botones para cambiar los contadores */}
            <div>
                <button onClick={incrementar1}>Incrementar contador 1</button>
                <button onClick={incrementar2}>Incrementar contador 2</button>       
            </div>   

        </div>
    );
}

export default Ejemplo2;
