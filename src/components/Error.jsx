// props con 'children'
function Error({children}) {
    return (
        <div className="text-red-600 text-center mb-4 bg-red-200 p-3 rounded-md border border-solid border-red-600">
            {children}
        </div>  
    );
}

export default Error;