/* 
Ejemplo de uso del Hook useState

Crear un componente de tipo función y acceder a su estado privado a través de un hook, y además, poder modificarlo
*/


import React, { useState } from 'react';

const Ejemplo1 = () => {


    // Valor inicial para un contador
    const valorInicial = 0;

    // Valor inicial para una persona
    const personaInicial = {
        nombre: 'Patricia',
        email: 'patrivr95@gmail.com'
    }


    /**
     * Queremos que el valorInicial y personaInicial
     * sean parte del estado del componente, para así poder
     * gestionar su cambio y que éste se vea reflejado en la vista del componente
     * 
     * 
     * const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
     */


    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);


    /**
     * Función para actualizar el estado privado que contiene el contador
     */
    function incrementarContador() {
        //? funcionParaCambiar(nuevoValor)
        setContador(contador + 1);
    }


    /**
     * Función para actualizar el estado de persona en el componente
     */
    function actualizarPersona() {
        setPersona(
            {
                nombre: 'Pepe',
                email: 'pepe@gmail.com'
            }
        )
    }


    return (
        <div>
            <h1>Ejemplo de useState()</h1>
            <h2>
                Contador: {contador}
            </h2>
            <h2>
                Persona:
            </h2>
            <h3>
                Nombre: {persona.nombre}
                Email: {persona.email}
            </h3>

            <button onClick={incrementarContador}>
                Incrementar contador
            </button>
            <button onClick={actualizarPersona}>
                Actualizar persona
            </button>
        </div>
    );
}

export default Ejemplo1;