import { useState } from "react";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
import Formulario from "./components/formulario";

function App() {
  // STATES
  const [pacientes, setPacientes] = useState([]);

  return (
    <div className="container mx-auto max-w-screen-xl w-11/12">
      <Header />
      <div className="md:flex mt-20 justify-center">
        <Formulario 
          setPacientes={setPacientes}
        />
        <ListadoPacientes pacientes={pacientes}/>
      </div>
    </div>
  )
}

export default App;