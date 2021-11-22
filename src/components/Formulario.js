import React, {Fragment, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Citas from './Citas';

function Formulario({crearCita}) {

    //crear state de citas
    const [cita, actualizarCita] = useState({
        mascota: "",
        dueño: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [error, actualizarError] = useState(false);

    // funcion que se ejecuta cuando el usuario escribe algo en los input
    const onChangeCitas = (e) =>{
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        })

    }

    //Extraer valores
    const {mascota, dueño, fecha, hora, sintomas} = cita;

    //Cuando el usuario presiona submit
    const onSubmitCitas = e =>{
        e.preventDefault();

        //Validar Formulario
        if(mascota.trim() === '' || dueño.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true)
            return
        }

        actualizarError(false)

        //Asignar id
        cita.id = uuidv4();

        //Crear cita
        crearCita(cita);

        //Reiniciar Form
        actualizarCita({
            mascota: "",
            dueño: '',
            fecha: '',
            hora: '',
            sintomas: ''
        });

    }

    return (
        <Fragment>
            <h1>Agenda Citas</h1>
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p>: null}
            <form
                onSubmit={onSubmitCitas}
            >
                <label>Nombre de Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    onChange={onChangeCitas}
                    value={mascota}
                />

                <label>Nombre de Dueño</label>
                <input
                    type="text"
                    name="dueño"
                    className="u-full-width"
                    onChange={onChangeCitas}
                    value={dueño}
                />  

                <label>Fecha de Ingreso</label>
                <input
                    type="date"
                    name="fecha"
                    onChange={onChangeCitas}
                    value={fecha}
                    className="u-full-width"
                /> 

                <label>Hora de Ingreso</label>
                <input
                    type="time"
                    name="hora"
                    onChange={onChangeCitas}
                    value={hora}
                    className="u-full-width"
                />

                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    onChange={onChangeCitas}
                    value={sintomas}
                    name="sintomas"
                ></textarea>

                <button 
                    type="submit"
                    className="u-full-width button-primary"
                >
                    Agendar Cita
                </button>
            </form>
        </Fragment>
    );
}

export default Formulario;