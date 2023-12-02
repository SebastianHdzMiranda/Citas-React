import Paciente from "./Paciente";

function ListadoPacientes({pacientes, setPaciente, eliminarPaciente}) {

    return (
    
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto">

            {pacientes && pacientes.length ? 
                <>
                    <h2 className="font-black text-2xl md:text-3xl text-center">Listado Pacientes</h2>

                    <p className="text-center mt-5 mb-10 text-xl">
                    Administra tus {''}
                    <span className="text-indigo-600 font-bold">citas</span>
                    </p>

                    {
                        // Iterando sobre pacientes
                        pacientes.map( paciente =>
                            <Paciente 
                                key={paciente.id} 
                                paciente={paciente}
                                setPaciente={setPaciente}
                                eliminarPaciente={eliminarPaciente}
                            />
                        )
                    }
                
                </> 
            : 
                <>
                    <h2 className="font-black text-2xl md:text-3xl text-center">No hay pacientes</h2>

                    <p className="text-center mt-5 mb-10 text-xl">
                    Comienza agregando uno {''}
                    <span className="text-indigo-600 font-bold">y aparecerán en este espacio</span>
                    </p>
                </>
            }
        </div>

    );
}

export default ListadoPacientes;