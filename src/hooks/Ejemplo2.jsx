/**
 * Ejemplo de uso de useState, useRef (referencias¡r elementos dentro de la vista), 
 * useEffect (este se utiliza para los cambios en la vista)
 */


import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    // Vamos a crear dos contadores distintos, cada uno en un estado diferente

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);


    // Vamos a xrear una referencia con useRef() para asociar una variable con un elemento del DOM del componente (vista HTML)
    const miRef = useRef();

    function incrementar1() {
        setContador1(contador1 + 1);
    }

    function incrementar2() {
        setContador2(contador2 + 1);
    }



    /**
     * Trabajando con useEffect
     */



    /**
     * ? Caso 1: Ejecutar SIEMPRE un snippet de codigo
     * Cada vez que haya un cambio en el estado del componente, se ejecuta aquello que esté dentro del useEffect()
     */

    /* useEffect(() => {
      console.log('Cambio en el estado del componente');
      console.log('Mostrando referencia al elemento del DOM');
      console.log(miRef);  
    }) */

    /**
     * ?Caso 2: Ejecutar SOLO cuando cambie contador1
     * Cada vez que haya un cambio en el contadro 1, se ejecuta lo que diga el useEffect()
     * En caso de que cambie contador2, no habra ejecución
     */


    /* useEffect(() => {
        console.log('Cambio en el estado del contador 1');
        console.log('Mostrando referencia al elemento del DOM');
        console.log(miRef);
    }, [contador1]); */

    /**
     * ?Caso 3: Ejecutar SOLO cuando cambie contador1 o contador 2
     * Cada vez que haya un cambio en el contadro 1, se ejecuta lo que diga el useEffect()
     * En caso de que cambie contador2, no habra ejecución
     */

    useEffect(() => {
        console.log('Cambio en el estado del contador 1 / contador 2');
        console.log('Mostrando referencia al elemento del DOM');
        console.log(miRef);
    }, [contador1, contador2]);


    return (
        <div>
            <h1>Ejemplo de useState(), useRef(), useEffect()</h1>
            <h2>
                Contador1: {contador1}
            </h2>
            <h2>
                Contador2: {contador2}
            </h2>
            {/* Elemento referenciado */}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            <button onClick={incrementar1}>
                Incrementar contador 1
            </button>
            <button onClick={incrementar2}>
                Incrementar contador 2
            </button>

        </div>
    );
}

export default Ejemplo2;
