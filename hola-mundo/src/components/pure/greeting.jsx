//componente de tipo clase: constructores, estado privado y props
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    constructor(props){
        //para poder modificar el this.state se necesita usat el Setstate

        //Se envia desdes el app.js
        super(props)

        //state -> informacion privada del componente que no es visible desde el exterior y no es modificable, estatica e inmutable.
        this.state = {
            age : 29
        }
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }

    //para poder bindear las propiedades es importante usar funciones de tipo flecha
    birthday = () => {
        this.setState((prevState) =>
            (
                {
                    age: prevState.age + 1
                }
            ))
    }
}

//Especificar el tipo
Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;
