import React, {useRef } from 'react';

const Child = ({name,send, update}) => {

    const messageRef = useRef('')
    const nameRef = useRef('')

    function pressButon() {
        const text = messageRef.current.value //acceder al valor del elemento
        alert(`Default Text ${text}`)
    }

    function pressButtonParams(text) {
        alert(`Text: ${text}`)
    }

    function submitName(e) {
        e.preventDefault() //evita q se recarge la pagina
        update(nameRef.current.value)
    }

    return (
        <div style={{background: 'lightyellow', padding: '30px'}}>
            <p onMouseOver={() => console.log('On Mouse Over')}>Hello, { name }</p>
            <button onClick={() => console.log('Boton 1 pulsado')}>Boton 1</button>
            <button onClick={ pressButon }>Boton 2</button>
            <button onClick={() => pressButtonParams('hello')}>Boton 3</button>
            <input placeholder='Send a text to your father' 
                onFocus={() => console.log('focus')} 
                onChange={(e) => console.log('Input changed:',e.target.value)}
                onCopy={() => console.log('copied from input')}
                ref = { messageRef }  
            />
            <button onClick={() => send(messageRef.current.value)}>Send message</button>
            <div style={{marginTop: '20px'}}>
                <form onSubmit={ submitName }>
                    <input ref={ nameRef } placeholder='New Name'/>
                    <button type='submit'>Update Name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
