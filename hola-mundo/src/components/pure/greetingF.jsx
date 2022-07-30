//componete tipo funcion, es lo mas usado a dia de hoy
import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    //const [variable,metodo para actualizarlo] = useState(valor inicial)
    const [age,setage] = useState(29)

    const birthday = () => {
        //actualizamos el state
        setage(age + 1)
    }

    return (
        <div>
            <h1>
                Hi!!! {props.name} desde componente funcional!
            </h1>
            <h2>
                Tu edad: {age}
            </h2>
            <div>
                <button onClick={birthday}>Cumplir años u.u</button>
            </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
