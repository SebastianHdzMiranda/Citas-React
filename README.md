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








