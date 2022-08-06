import React, { useState } from 'react';
import Contacto from '../pure/contacto';
import { Contact } from '../models/contact.class';
import ContactForm from '../pure/form/contactForm';


const ContactList = () => {

    const defaultContact1 = new Contact('Maria','Flores','maria@gmail.com',false)
    const defaultContact3 = new Contact('Kira','Mantilla','maria@gmail.com',false)

    const [contacts, setContacts] = useState([defaultContact1, defaultContact3]);

    function cambiarEstado(contact) {
        console.log('Estado incial del contacto', contact);
        const index = contacts.indexOf(contact)
        const tempContacts = [...contacts]
        tempContacts[index].estado = !tempContacts[index].estado
    }

    function agregarContacto(contact) {
        const tempContacts = [...contacts]
        tempContacts.push(contact)
        setContacts(tempContacts)
    }

    function borrarContacto(contact) {
        const index = contacts.indexOf(contact)
        const tempContacts = [...contacts]
        tempContacts.splice(index,1)
        setContacts(tempContacts)
    }

    return (
        <div>
            <h4>
                Lista de Contactos
            </h4>
            <div className='col-20'>
                <div className='card'>
                    <div className='card-body'>
                    { contacts.map((contact, index) => {
                            return (
                                <Contacto 
                                key={index}
                                contact={contact}
                                estado={cambiarEstado}
                                remove={borrarContacto}
                                ></Contacto>
                            )
                        })}
                    </div>
                </div>
            </div>
            <ContactForm add={agregarContacto}></ContactForm>
        </div>
    );
};


export default ContactList;
