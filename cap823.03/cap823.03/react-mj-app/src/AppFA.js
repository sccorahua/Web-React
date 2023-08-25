import { data } from "./data";
import Cursos from "./comp/Cursos";
import ContadorC from "./compEstado/ContadorC";
import PublicidadCursoC from "./compEstado/PublicidadCursoC";
import RelojC from "./compEstado/relojC";
import ContadorF from "./compEstado/ContadorF";
import RelojF from "./compEstado/RelojF";
import PublicidadCursoF from "./compEstado/PublicidadCursoF";
import Navegador from "./comp/Navegador";

const AppFA=()=>{
    return(
       <div className="container">
            <Navegador/>

        </div>
    )
}

export default AppFA;