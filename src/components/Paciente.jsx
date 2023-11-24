import React from 'react'

function Paciente() {
    return (
        <div className="m-3 bg-white px-5 py-10 rounded-lg">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre:
                <span className="font-normal normal-case"> Hook</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario:
                <span className="font-normal normal-case"> Sebastian</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email:
                <span className="font-normal normal-case"> correo@correo.com</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha Alta:
                <span className="font-normal normal-case"> 10 Diciembre 2023</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Sintomas:
                <span className="font-normal normal-case"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sequi et voluptas inventore culpa repellendus recusandae iste vitae.</span>
            </p>
        </div>
    )
}

export default Paciente;