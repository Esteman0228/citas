import React from 'react';

function Citas({cita, eliminarCita}) {
    return (
        <div className="cita">
            <p>Mascota: <span>{cita.mascota}</span></p>
            <p>Dueño: <span>{cita.dueño}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Sintomas: <span>{cita.sintomas}</span></p>

            <button
                className="eliminar button u-fill-width"
                onClick={() => eliminarCita(cita.id)}
            >
                Eliminar &times;
            </button>
        </div>
    );
}

export default Citas;