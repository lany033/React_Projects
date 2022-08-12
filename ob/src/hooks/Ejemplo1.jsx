//Ejemplo de uso del hook Use State
//Crear un componente de tipo funcion y acceder a su estado privado a traves de un hook y ademas poder modificarlo

import React, { useState } from 'react';

const Ejemplo1 = () => {

    //valor inicial para un contador
    const valorInicial = 0

    //valor inicial para una persona
    const personaInicial = {
        nombre: 'Melanie',
        email: 'melanie@gmail.com'
    }

    //Queremos que el valor inicial y persona inicial sean parte del estado del componete para asi poder gestionar su cambio y que este se vea reflejado en la vista del componente.
    // const [nombreVariable, funcionParaCambiar] = useState(valorInicial)

    const [contador, setContador] = useState(valorInicial)
    const [persona, setPersona] = useState(personaInicial)

    //Funcion para actualizar el estado privado que contienen el contador
    function incrementarContador(){
        //funcion para camiar(nuevoValor)
        setContador(contador + 1)   
    }

    //funcion para actualizar el estado de persona en el componente
    function actualizarPersona(){
        setPersona(
            {
                nombre: 'Pepe',
                email: 'pepe@gmail.com'
            }
        )
    }
        

    return (
        <div>
            <h1>
               ******* Ejemplo de useState() ******
            </h1>
            <h2>CONTADOR: {contador}</h2>
            <h2>DATOS DE LA PERSONA:</h2>
            <h3>NOMBRE:{persona.nombre}</h3>
            <h4>EMAIL: {persona.email}</h4>
            {/* Bloque de botones para actualizar el estado */}
            <button onClick={incrementarContador}>Incrementar contador</button>
            <button onClick={actualizarPersona}>Actualizar Persona</button>

        </div>
    );
}

export default Ejemplo1;


