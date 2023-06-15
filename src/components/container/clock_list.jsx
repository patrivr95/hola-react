import React from 'react';
import { Clock } from '../pure/clock';

export const ClockList = () => {
    const defaultState = {
        fecha: new Date(),
        edad: 28,
        nombre: "Patri",
        apellidos: "Vadillo Ruiz"
    }

    const [user, setUser] = useState(defaultState);

    useEffect(() => {
        const invertaloEDad = setInterval(() => {
            actualizar();
        }, 1000);
        return () => {
            clearInterval(intervaloEdad);
        }
    })

    const actualizar = () => {
        return setUser({
            fecha: user.fecha,
            edad: user.edad + 1,
            nombre: user.nombre,
            apellidos: user.apellidos
        });
    }

    return (
        <div>
            <h1>
                Hora actual:
                {user.fecha.toLocaleTimeString()}
            </h1>
            <h2>
                {user.nombre} {user.apellidos}
            </h2>
            <h3>
                Edad: {user.edad}
            </h3>
            <Clock></Clock>
        </div>
    );
}


