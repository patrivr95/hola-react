import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contact.class';


const ContactComponent = ({ contacto }) => {
    return (
        <div>
            <h2>
                Nombre: { contacto.nombre }
            </h2>
            <h2>
                Apellido: { contacto.apellido }
            </h2>
            <h2>
                Email: { contacto.email }
            </h2>
            <h2>
                Este contacto está: {contacto.conectado ? 'Contacto en Línea' : 'Contacto no disponible'}
            </h2>
        </div>
    );
};


ContactComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ContactComponent;

