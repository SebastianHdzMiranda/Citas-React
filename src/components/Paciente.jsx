import React from 'react'
import Swal from 'sweetalert2';

function Paciente({paciente, setPaciente, eliminarPaciente}) {

    const {nombre, propietario, email, fecha, sintomas, id} = paciente;

    const handleEliminar = ()=> {
        // const respuesta = confirm('Deseas Eliminar ese paciente?');

        Swal.fire({
            title: "¿Está seguro?",
            text: "¡Se eliminara este paciente permanentemente!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#4f46e5",
            cancelButtonColor: "#dc2626",
            confirmButtonText: "¡Si, bórralo!",
            cancelButtonText: "¡No, cancela!"
          }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                title: "Eliminado!",
                text: "Su paciente ha sido eliminado.",
                icon: "success"
                });
                eliminarPaciente(id);
            }
        });
    }


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
                    onClick={()=> setPaciente(paciente)}
                >
                    Editar
                </button>
                <button
                    type='button'
                    className='py-2 px-10 bg-red-600 hover:bg-red-700 transition-colors rounded-md text-white font-bold uppercase w-full text-sm'
                    onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
}

export default Paciente;