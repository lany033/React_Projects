import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const ContactForm = ({add}) => {

    const nombreRef = useRef('')
    const apellidoRef = useRef('')
    const emailRef = useRef('')

    function addContact(e) {
        e.preventDefault()
        const newContact = new Contact(
            nombreRef.current.value,
            apellidoRef.current.value,
            emailRef.current.value,
            false
        )

        add(newContact)
    }

    return (
        <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={ nombreRef } id='inputNombre' type='text' placeholder='Nombre' className='form-control form-control-lg' required autoFocus/>
                <input ref={ apellidoRef } id='inputLastname' type='text' placeholder='Apellido' className='form-control form-control-lg' required/>
                <input ref={ emailRef } id='inputEmail' type='text' placeholder='Email' className='form-control form-control-lg'/>
                <button type='submit' className='btn btn-success btn-lg ms-2'>Add</button>
            </div>
        </form>
    );
}

ContactForm.propTypes = {
    add: PropTypes.func.isRequired
}

export default ContactForm;
