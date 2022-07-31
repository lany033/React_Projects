import React from 'react';
import PropTypes from 'prop-types';
import Contacto from '../pure/contacto';
import { contact } from '../models/contact.class';


const ContactList = () => {

    const defaultContact = new contact('Maria','Flores','maria@gmail.com',true)

    return (
        <div>
            <h1>
                Tus Contactos:
            </h1>
        <Contacto contact={defaultContact}></Contacto>
        </div>
    );
};


export default ContactList;
