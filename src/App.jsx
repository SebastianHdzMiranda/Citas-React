import { useEffect, useState } from "react";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
import Formulario from "./components/Formulario";


function App() {

  // STATES
  /* "lazy initialization ()=>" en README.md */
  const [pacientes, setPacientes] = useState( ()=> JSON.parse( localStorage.getItem('pacientes')) || [] );
  const [paciente, setPaciente] = useState({});


  useEffect(() => {
      localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);


  const eliminarPaciente = id => {
    const pacientesFilt = pacientes.filter( pacienteState => pacienteState.id !== id);
    setPacientes(pacientesFilt);
  }

  return (
    <div className="container mx-auto max-w-screen-xl w-11/12">
      <Header />
      <div className="md:flex mt-20 justify-center">
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}

        />
        <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App;