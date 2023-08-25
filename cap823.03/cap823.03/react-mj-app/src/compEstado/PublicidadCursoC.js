import { Component } from "react";
import { data } from "../data";

const{cursos}=data;
class PublicidadCursoC extends Component{
    state={
        indice:0
    }

    muestraCursos=()=>{
        this.setState(
            {
                indice:(this.state.indice===cursos.length-1?(0):(this.state.indice+1))
            }
        )
    }

    componentDidMount=()=>{
        this.x=setInterval(() =>{
            this.muestraCursos();
        }, 1000);
    }

    render(){

        return(
            <div>
                <p className="lead fs-2 text-primary"> Total cursos {cursos.length} </p>
                <div className="card">
                    <div className="card-header">
                        Curso: {cursos[this.state.indice].nombre}
                    </div>
                    <div className="card-body">
                        Descripcion: {cursos[this.state.indice].descripcion}
                    </div>
                    <div className="card-footer">
                        Nivel: {cursos[this.state.indice].nivel}
                    </div>
                </div>
            </div>
        )
    }
}

export default PublicidadCursoC;