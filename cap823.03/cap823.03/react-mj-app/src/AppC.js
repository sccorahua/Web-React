import { Component, Fragment } from "react";
import Mensaje from "./comp/Mensaje";
//import AppFA from "./AppFA";
import MensajeC from "./comp/MensajeC";

//clase
class AppC extends Component{
    //conponente funcional haciamos un return aqui hacemos un metodo render
    //render hereda de component, render llama al return
    render(){
        return(
            <div className="container lead fs-3 text-primary">
                <p className="lead fs-3 text-primary"> 
                    Componente Clase
                </p>
                <MensajeC mensaje="Feliz dia del trabajo" remitente="Departamento de recursos humanos"/>
                <MensajeC mensaje="Cargar sus archivos" remitente="Departamento de TI"/>
                <Mensaje msg="Reunete con el equipo de arquitectura" prioridad="alta"/>
                <Mensaje msg="Revisa el avance del proyecto" prioridad="intermedia"/>
                <Mensaje msg="Reunute con el equipo de usuarios" prioridad="baja"/>                
            </div>
            //tambien se puede usar, siempre habra una etiqueta de mayor nivel
            /*<Fragment>
                <div>

                </div>
                <div>

                </div>
            </Fragment>*/
        )
    }
}

export default AppC;
