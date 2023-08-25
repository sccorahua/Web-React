import ContadorF from "../compEstado/ContadorF";
import PublicidadCursoF from "../compEstado/PublicidadCursoF";

const GestorContadorPublicidadF=()=>{
    return(
        <div className="row">
                <div className="col col-5">
                    <div className="border border-2 border-primary shadow p-2 m-2">
                        <ContadorF/>
                    </div>
                </div>
                <div className="col col-5">
                    <div className="border border-2 border-primary shadow p-2 m-2">
                    <PublicidadCursoF/>
                    </div>
                </div>
            </div>
    )
}

export default GestorContadorPublicidadF;