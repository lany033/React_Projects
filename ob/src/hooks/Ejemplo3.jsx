//Ejemplo hooks:
// -useState
// -useContext()
import React, {useContext, useState} from 'react';
//COMPONENTE 1 -> DISPNE DE UN CONTEXTO QUE VA TENER UN VALOR QUE RECIBE DESDE EL PADRE

const miContexto = React.createContext(null)

const Componente1 = () => {

    const state = useContext(miContexto)

    return (
        <div>
            <h1>El token es: {state.token}</h1>
            {/* //Pintamos el Componente2 */}
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto);
    return (
        <div>
            <h2>La sesion es: {state.sesion}</h2>
        </div>
    );
}

export default function MicomponenteConContexto() {

    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }

    //Creamos el estado de este componente
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion() {
        setSessionData(
            {
                token: 'JQWER',
                sesion: sessionData.sesion + 1
            }
        )
    }

    return (
    <miContexto.Provider value={sessionData}>
        {/* todo lo que esta aqui dentro puede leeer los datos de sessionData
        ademas si se actualiza los componentes de aqui tambin lo actualizan */}
        <h1>Ejemplo de useState y useContext</h1>
        <Componente1></Componente1>
        <button onClick={actualizarSesion}>Actualizar sesion</button>
    </miContexto.Provider>
    )
}


