import React from 'react'

function Paciente(props) {

    const {nombre, propietario, email, fecha, sintomas} = props.paciente;

    return (
        <div className="m-3 bg-white px-5 py-10 rounded-lg">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre:
                <span className="font-normal normal-case"> {nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario:
                <span className="font-normal normal-case"> {propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email:
                <span className="font-normal normal-case"> {email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha Alta:
                <span className="font-normal normal-case"> {fecha}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Sintomas:
                <span className="font-normal normal-case"> {sintomas}</span>
            </p>

            <div className='flex gap-3 flex-col md:flex-row mt-7'>
                <button
                    type='button'
                    className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 transition-colors rounded-md text-white font-bold uppercase w-full text-sm'
                >
                    Editar
                </button>
                <button
                    type='button'
                    className='py-2 px-10 bg-red-600 hover:bg-red-700 transition-colors rounded-md text-white font-bold uppercase w-full text-sm'
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
}

export default Paciente;