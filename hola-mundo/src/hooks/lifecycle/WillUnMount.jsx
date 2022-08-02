//Ejemplo de uso del mentodo componentWillUnmount para componente clase
//Ejemplo de usp de hooks para componente funcional
//Cuando el componente va desaparecer

import React, { Component, useEffect } from 'react'

export class WillUnMount extends Component {

    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente desaparesca');
    }

  render() {
    return (
      <div>
      <h1>WillUnMount</h1>
      </div>
    )
  }
}

export const WillUnMountHook = () => {
    useEffect(() => {
        
        return () => {
            console.log('Comportamiento antes de que el componente desaparesca');
        }
    }, []);

    return (
        <div>
            <h1>WillUnMount</h1>
        </div>
    );
}



