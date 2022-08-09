import React, {useState} from 'react';

let red = 0
let green = 200
let blue = 130

const loggedStyle ={
    backgroundColor:`rgb(${red},${green},${blue})`,
    color: 'white',
    fontWeight: 'bold' 
}

//usuario no logueado
const unloggedStyle = {
    backgroundColor:'tomato',
    color: 'white',
    fontWeight: 'bold'
}

//Login / Logout buttons
const LoginButtons = ({loginAction, propStyle}) =>{
    return (
       <button style={propStyle} onClick={loginAction}>Login</button>
    )
}

const LogoutButtons = ({logoutAction, propStyle}) =>{
    return (
       <button style={propStyle} onClick={logoutAction}>Logout</button>
    )
}

// ? (Expresion true) && expresion => se renderiza la expresion
// ? (Expresion false) && expresion => NO se renderiza la expresion



const OptionalRender = () => {

    const [access, setAccess] = useState(false);
    const [nMessage, setNMessage] = useState(0);

    // const updateAccess = () => {
    //     setAccess(!access)
    // }

    const loginAction = () =>{
        setAccess(true)
    }

    const logoutAction = () =>{
        setAccess(false)
    }

    let optionalButton 

    if (access) {
        optionalButton = <LogoutButtons propStyle={ unloggedStyle } logoutAction={logoutAction}></LogoutButtons>
    }else{
        optionalButton = <LoginButtons propStyle={ loggedStyle } loginAction={loginAction}></LoginButtons>
    }

    //UNREAD messages

    let addMessages = () =>{
        setNMessage(nMessage + 1)
    }

    return (
        <div>
            {optionalButton}
            {/* {nMessage > 0 && nMessage === 1 && <p> You have {nMessage} new message...</p>}
            {nMessage > 1 && <p>You have {nMessage} new messages...</p>}
            {nMessage === 0 && <p>There are no new messages</p>} */}
            {/* Operador ternario */}
            {access ? (
                <div>
                    {nMessage > 0 ? 
                        <p> You have {nMessage} new message{nMessage > 1 ? 's' : null}...</p> : 
                        <p> There are no new messages</p>
                    }
                    <button onClick={addMessages}>{ nMessage === 0 ?  'Add your first message' : 'Add new message'}</button>
                </div>
            ) : null}
            
        </div>
    );
}

export default OptionalRender;
