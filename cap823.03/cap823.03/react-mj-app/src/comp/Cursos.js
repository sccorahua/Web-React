import TableroCursos from "./TableroCursos";
import TarjetaCursos from "./TarjetaCursos";

const Cursos=(props)=>{
    const{cursos,indicaTabla,indicaTarjeta}=props;
    return(
        <div>
            <p className="lead fs-2 text-primary">
                Total de  cursos que se dictan: {cursos.length}
            </p>
            {indicaTarjeta==="1" && <TarjetaCursos miscursos={cursos}/> }
            <hr/>
            {indicaTabla==="1" && <TableroCursos cursos={cursos}/> }
            <hr/>
        </div>
    )
}

export default Cursos;