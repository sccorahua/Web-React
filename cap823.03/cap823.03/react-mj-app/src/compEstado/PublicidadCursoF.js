import { useEffect, useState } from "react";
import { data } from "../data";


const PublicidadCursoF=()=>{
    const{cursos}=data;
    const[indice,setIndice]=useState(0); 

    const muestraCursos=()=>{
        setIndice(
            indice=>(indice===cursos.length-1?0:indice+1)
        )
        console.log(cursos.length);
    }

    useEffect(
        ()=>{
            const id=setInterval(() => {
                muestraCursos();
            }, 1000);
        },indice
    )

    return(
        <div className="row">
            <div>
                <p className="lead fs-2 text-primary">Total de cursos {cursos.length} </p>
            </div>
            <div className="card lead fs-2 text-primary">
                <div className="card-header">
                    Curso: {cursos[indice].nombre}
                </div>
                <div className="card-body">
                    Descripcion: {cursos[indice].descripcion}
                </div>
                <div className="card-footer">
                    Nivel: {cursos[indice].nivel}
                </div>
            </div>
        </div>
    )
}  

export default PublicidadCursoF;