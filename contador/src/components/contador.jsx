import React, {useState, useEffect} from 'react';

const Contador = () => {
    const valorInicial = 0
    const [contador, setcontador] = useState(valorInicial);

    useEffect(() => {
        document.title = `clickaste ${contador} veces`
    });

    return (
        <div>
            <h2>Contador: {contador} </h2>
            <button onClick={() => setcontador(contador+1)}> Contador</button>
        </div>
    );
}

export default Contador;
