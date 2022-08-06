import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';


const Contacto = ({ contact, estado, remove }) => {

    useEffect(() => {
        console.log('Contacto añadido');
        return () => {
        console.log(`Contacto ${contact.nombre} eliminado`);
        };
    }, [contact]);

    function estadoContacto() {
        if (contact.estado) {
            return (<i onClick={() => estado(contact)} className='bi bi-check-circle-fill' style={{color: 'green'}}></i>)
        } else {
            return (<i onClick={() => estado(contact)} className='bi bi-x-circle-fill' style={{color: 'red'}}></i>)
        }
    }

    return (
        <div>
            <p className='align-middle' style={{color: 'black'}}>Nombre: { contact.nombre }</p>
            <p className='align-middle' style={{color: 'black'}}>Apellido: { contact.apellido } </p>
            <p className='align-middle' style={{color: 'black'}}>Email: { contact.email } </p>
            <p className='align-middle' style={{color: 'black'}}>Estado: { estadoContacto() } </p>
            <i className='bi-trash' onClick={() => remove(contact)} style={{color: 'tomato', fontWeight: 'bold'}}></i>
        </div>
    );
};


Contacto.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    estado: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default Contacto;
