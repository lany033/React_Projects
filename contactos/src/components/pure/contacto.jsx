import React from 'react';
import PropTypes from 'prop-types';
import { contact } from '../models/contact.class';

const Contacto = ({ contact }) => {
    return (
        <div>
            <h2>Nombre: { contact.nombre }</h2>
            <h3>Apellido: { contact.apellido } </h3>
            <h3>Email: { contact.email } </h3>
            <h3>Estado: { contact.estado ? 'Conectado' : 'Desconectado' } </h3>
        </div>
    );
};


Contacto.propTypes = {
    contact: PropTypes.instanceOf(contact)
};


export default Contacto;
