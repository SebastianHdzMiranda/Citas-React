import Paciente from "./Paciente";

function ListadoPacientes({pacientes}) {

    return (
        
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto">
            <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>

            <p className="text-center mt-5 mb-10 text-xl">
                Administra tus {''}
                <span className="text-indigo-600 font-bold">citas</span>
            </p>
            
            {
                // Iterando sobre pacientes
                pacientes.map( (paciente, index) =>
                    <Paciente key={index} paciente={paciente}/>
                )
            }
        </div>
    );
}

export default ListadoPacientes;