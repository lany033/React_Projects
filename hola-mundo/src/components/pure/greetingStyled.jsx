import React, {useState} from 'react';

//definiendo estilos en constantes
//si el usuario esta logeado
const loggedStyle ={
    color: 'white' 
}

//usuario no logueado
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {

    //generamos un estado para el componente y asi controlar si el usuario esta o no logueado

    const [logged, setLogged] = useState(false);

    const greetingUser = () => (<p>Hola, {props.name}</p>)
    const pleaseLogin = () => (<p>please Login</p>)


    return (
        <div style={ logged ? loggedStyle : unloggedStyle}>
            { logged ? 
            greetingUser()
            :
            pleaseLogin()
            }
            <button onClick={() => {
                console.log('Boton pulsado')
                setLogged(!logged)
            }}>
                { logged ? 'Logout' : 'Login' }
            </button>
        </div>
    );
}

export default GreetingStyled;
