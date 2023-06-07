/**
 * Ejemplo Hooks
 * - UseState()
 * - useContext() -> para trabajador con datos
 */


import React, { useState, useContext } from 'react';

/**
 * 
 * @returns Componente1
 * Dispone de un context que va a tener un valor
 * Que recibe desde el padre
 */
const miContexto = React.createContext(null)

const Componente1 = () => {

    // Inicializamos un estado vacio que va a rellenarse con los dfatos del contexto del padre
    const state = useContext(miContexto);



    return (
        <div>
            <h1>
                El Token es: {state.token}
            </h1>
            {/*Pintamos el componente 2  */}
            <Componente2></Componente2>
        </div>
    );
}



const Componente2 = () => {

    const state = useContext(miContexto)

    return (
        <div>
            <h2>
                La sesión es: {state.sesion}
            </h2>
        </div>
    );
}




export default function MiComponenteConContexto() {

    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }


    // Creamos el estado de este componente
    const [sessionData, setSessionData] = useState(estadoInicial);


    function actualizarSesion() {
        setSessionData(
            {
                token: '123456789',
                sesion: sessionData.sesion + 1
            });
    }


    return (
        <miContexto.Provider value={sessionData}>
            {/* Todo lo que esta aqui dentro puede leer los datos de sessionData, además de actualizarse.
        Si se actualiza, los componentes de aqui también lo actualizan */}
            <h1>Ejemplo de useState() y useContext()</h1>
            <Componente1></Componente1>
            <button onClick={actualizarSesion}>
                Actualizar sesión
            </button>
        </miContexto.Provider>
    )
}


