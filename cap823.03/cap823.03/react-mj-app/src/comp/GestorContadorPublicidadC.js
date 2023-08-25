import { Component } from "react";
import ContadorC from "../compEstado/ContadorC";
import PublicidadCursoC from "../compEstado/PublicidadCursoC";

class GestorContadorPublicidadC extends Component{
     render(){
        return(
            <div className="row">
            <div className="col col-5">
                <div className="border border-2 border-primary shadow p-2 m-2">
                <ContadorC/>
                </div>
            </div>
            <div className="col col-5">
                <PublicidadCursoC/>
            </div>
        </div>
        )
     }
}
export default GestorContadorPublicidadC;