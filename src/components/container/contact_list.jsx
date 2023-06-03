import React from 'react';
import { Contacto } from '../../models/contact.class';
import ContactComponent from '../pure/contact';

const ContactListComponent = () => {

    const defaultContact = new Contacto("Patricia", "Vadillo", "patrivr95@gmail.com", false);


    return (
        <div>
            <h1>
                Contacto:
            </h1>
            <ContactComponent contacto={defaultContact}></ContactComponent>
        </div>
    );
}

export default ContactListComponent;
