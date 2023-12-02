import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

/* Soluciono problema al ejecutar el useEffect para obtener valores de LStorage, borrar strictMode ya que React 18 y VITE incorporan el modo estricto (StrictMode) en el proyecto, cuando estamos en modo desarrollador la app renderiza doble vez gracias a este modo 
  
  // codigo que usamos

  useEffect(()=> {
    const obtenerLS = ()=> {
      const pacientesLS = JSON.parse( localStorage.getItem('pacientes')) || [];

      setPacientes(pacientesLS);
    }

    obtenerLS();
  }, []);

*/
// ReactDOM.createRoot(document.getElementById('root')).render(<App />)
