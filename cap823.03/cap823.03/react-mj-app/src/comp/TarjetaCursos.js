const TarjetaCursos=(props)=>{
    const{miscursos}=props;
    return(
        <div>
            <p className="lead fs-2 text-primary">
                Cursos mostrados en Cards
            </p>
            {
                miscursos.map((curso,index)=>(
                    <div className="col col-4" key={index}>
                        <div className="card">
                            <div className="card-header bg-primary text-white lead fs-2">
                                Curso: {curso.nombre}
                            </div>
                            <div className="card-body">
                                Nivel: {curso.nivel}
                            </div>
                            <div className="card-footer">
                                Descripcion: {curso.descripcion}
                            </div>
                        </div>
                    </div>
                )
                )
            }
        </div>    
    )
}

export default TarjetaCursos;