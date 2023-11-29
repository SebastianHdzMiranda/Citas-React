import { useState, useEffect } from "react";
import Error from "./Error";
import { v4 as uuidv4 } from "uuid";

function Formulario({setPacientes}) {
  // STATES
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  // Funciones
  const handleSubmit = (e)=> {
    e.preventDefault();

    // Validando formulario
    const validar = [nombre, propietario, email, fecha, sintomas].includes('');

    if (validar) {
      setError(true);
      return;
    }

    setError(false);
    const paciente = {nombre, propietario, email, fecha, sintomas,id: uuidv4()}

    // ver #funcion de actualizacion useState (setEstado).README.md
    setPacientes( pacientes => [...pacientes, paciente]);

    // Reiniciar formulario
    resetearForm();
  }

  const resetearForm = ()=> {
    setNombre(''); setPropietario(''); setEmail(''); setFecha(''); setSintomas('');
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-xl mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form 
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        {error && 
          <Error>
            <p>Todos los campos son requeridos</p>
          </Error> 
        }  
        
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block pb-1 text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            value={nombre}
            onChange={ (e)=> setNombre(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block pb-1 text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            value={propietario}
            onChange={ (e)=> setPropietario(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block pb-1 text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email Contacto Propietario"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            value={email}
            onChange={ (e)=> setEmail(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block pb-1 text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            value={fecha}
            onChange={ (e)=> setFecha(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block pb-1 text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400 resize-none h-40"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={ (e)=> setSintomas(e.target.value) }
          />
        </div>

        <input
          type="submit"
          value="Agregar Paciente"
          className="
              bg-indigo-600 
              w-full 
              text-white 
              p-3 
              rounded-md 
              uppercase 
              font-bold 
              hover:cursor-pointer 
              hover:bg-indigo-700 
              transition-colors
            "
        />
      </form>
    </div>
  );
}

export default Formulario;