# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# npm init vite@latest 
    Iniciar un app de react con vite

# cd citas-react, npm install, npm run dev
    1.- entrar a la carpeta donde create la app
    2.- ejecutar npm install
    3.- correr la app con npm run dev

# npm run build

# JSX 
    JavaScript Syntax Extension: Extension del lenguaje desarrolada por Facebook para react

    - Parece JS pero muestra codigo HTML, y basicamente es un lenguaje de templete que muestra el HTML pero tiene todas las functiones de JS
    - Una vez compilado son archivos JS con funciones y objetos

    - JSX es estricto no como HTML, que no es estricto
    - las tags con solo apertura deberan finalizar con />
    - Cada componente debe tener un return
    - En este return debe haber maximo un solo elemento en el nivel maximo
    - Dentro del return solo se puede tener codigo condicional dentro de un ternario, no if's

# Snippets basicos
    - rfce 
    - clg
    - imp 

# Tailwind
    Ver docs en https://tailwindcss.com/docs/installation
    
    1.- Para usar Tailwind css se debe instalar las siguientes dependencias:
        
        npm install -D tailwindcss postcss autoprefixer


    2.- Para el archivo de configuracion ejecutar el sigiuente comando: 

        npx tailwindcss init -p

    3.- Añade las directivas Tailwind a tu CSS: 
        
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
    
    4.- Configure las rutas de su plantilla
        
        Agregue las rutas a todos sus archivos de plantilla que usaran tailwind en su tailwind.config.js
            
            content: ["./index.html", "./src/**/*.jsx"]

# HOOKS 
     
    basicos:
        -useState
        -useEffect
        -useContext  

    Reglas de Hooks:
        - Colocarlas antes de return o antes de funciones
        - No se deben de colocar dentro de condicionales, o tampoco despues de un return

    1.- useState: 
        - State es basicamente el estado de nuestra app

    2.- useEffect: 
        - es un callback, que se ejecuta cuando un state cambia o cuando el componente esta listo
        - Al ejecutarse automaticamente cuando el componente esta listo, es un excelente lugar para colocar docigo para consultar una API o LocalStorage
        - Debido a que le podemos pasar una dependencia y estar escuchando por los cambios que sucedan en una variable, puede actualizar el componente cuando el cambio suceda
        
            useEffect(() => {
                <!-- tu codigo aqui -->
            }, [variable]);

        - Si las dependencias estan vacias, el codigo se ejecuta cuando el componente este listo:
            
            useEffect(() => {
                <!-- tu codigo aqui -->
            }, []);

        - Se pueden tener varios useEffect en un componente
        - Se ejecutan conforme los declaras en el codigo, el primer useEffect que tengas en tu componente, sera el primero en ejecutarse y asi sucesivamente
        

# EVENTOS
    - Muy similar a JS
    - Son camelCase -> es decir onchange se utiliza onChange, onclick es onClick

# props
    - Forma de pasar variables o funciones de un componente a otro

# funcion de actualizacion useState (setEstado)

    En el contexto de React y el uso de useState, cuando defines una función de actualización de estado utilizando la forma de una función dentro de setEstado, el parámetro de esa función es el estado anterior.

        setEstado( estadoAnterior => nuevoEstado )

    Ejem del codigo:

        setPacientes( pacientes => [...pacientes, paciente]);

    La función que se proporciona como argumento toma pacientes como su parámetro, que representa el estado actual de pacientes. Luego, crea un nuevo array utilizando el spread operator (...pacientes) para incluir todos los elementos actuales y agrega el nuevo elemento (paciente) al final.

# prop children
    En React, la prop children es una prop especial que permite pasar componentes o elementos hijos a otro componente. Se utiliza para transmitir contenido anidado dentro de un componente y permite una mayor flexibilidad y reutilización de los componentes.

# Buenas practicas
    - No ocupar el index del arreglo en .map para key, crear mejor un id unico con uuidv4 (recomendable)

# lazy initialization

    Consiste en retrasar la inicialización de un recurso hasta el momento en que realmente se necesita. Ejemplo,

        const [pacientes, setPacientes] = useState(()=>JSON.parse( localStorage.getItem('pacientes')) || []);

    En el state que guardamos en localStorage, queremos que el state tome valor que esta almacenado en LocalStorage solo cuando se necesite, y esto es al refrescar la pagina, por que si no en cada renderizado donde cambie pacientes se ejecutara la funcion JSON.parse. Ejecuta el siguiente codigo y ponlo a prueba:

        const[pacientes, setPacientes] = useState(console.log("Se ejecuta esta función") || []);

    Veras que cada ves que agregues, edites o elimines un paciente, se imprimira el clg. Y esto no es para nada optimo ya que afecta en el rendimiento y la eficacia de la aplicacion, en cambio al agregar un callback '()=>' se ejecutara solo la primera vez

        const[pacientes, setPacientes] = useState(()=>console.log("Se ejecuta esta función") || []);



