//usamos props porque recibiremos el parametro empresas de <ListarEmpresas empresas={}/>
const ListarEmpresas=(props)=>{
    
    const{empresas,onEliminar,onEditar}=props;

    return(
        <div>
            <p className="lead fs-2 text-primary">Total de empresas: {empresas.length} </p>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Empresa</th>
                        <th>Descripcion</th>
                        <th>Calificacion</th>
                        <th colSpan="2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        empresas.map((empresa)=>(
                            <tr key={empresa.id}>
                                <td> {empresa.nombre} </td>
                                <td> {empresa.descripcion} </td>
                                <td> {empresa.calificacion} </td>
                                {/*el togle lo que hace es invocar al modal, osea identifica*/}
                                {/*y el target hace que apunte a la ventana modal con # para ser lanzado*/}
                                <td> 
                                    <button className="btn btn-sm btn-primary" 
                                    onClick={()=>onEditar(empresa)} 
                                    data-bs-toggle="modal" 
                                    data-bs-target="#modal">
                                        Editar
                                    </button> 
                                </td>
                                {/*Para eliminar llamamos mediante una funcion callback no se puede referenciar directamente*/}
                                <td> <button className="btn btn-sm btn-danger" onClick={()=>onEliminar(empresa)}>Eliminar</button> </td>
                            </tr>
                        )
                        )
                    }
                </tbody>
            </table>
        </div>    
    )
}

export default ListarEmpresas;