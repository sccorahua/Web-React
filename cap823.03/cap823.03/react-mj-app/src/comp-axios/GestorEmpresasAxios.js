import { useEffect, useState } from "react";
import axios from "axios";
import ListarEmpresas from "./ListarEmpresas";
import RegistrarEmpresa from "./RegistrarEmpresa";

const GestorEmpresasAxios=()=>{

    //aca colocamos la url desde donde obtendremos la info de empresas
    //en este caso sera del proyecto de ecmjs que uso el puerto 30001
    const url="http://localhost:3001/empresas"

    //no colocamos valor de incializacion
    const[empresas,setEmpresas]=useState([]);

    //creamos funcion para contener
    //axios funciona como promesas entonces usamos un .then
    const listaEmp=()=>{
        axios.get(`${url}`)
        .then(resp=>(
            setEmpresas(resp.data)
        ))
    }

    //en hooks usamos el useEffect, que recibe como parametro el lambda y el
    //elemento a modificar, el arreglo vacio
    useEffect(
        ()=>{
            listaEmp();
        },[]
    )

    const deleteEmp=(empresa)=>{
        let confirma=window.confirm(`Desea eliminar la empresa ${empresa.nombre} cuya calificacion es ${empresa.calificacion}?`);
        if(confirma){
            axios.delete(`${url}/${empresa.id}`)
            .then(resp=>{
                listaEmp();
            })
        }
    }

    const editarEmp=(emp)=>{
        console.log(`llamada al editar modal`);
        document.getElementById("id").value=emp.id;
        document.getElementById("nombre").value=emp.nombre;
        document.getElementById("descripcion").value=emp.descripcion;
        document.getElementById("calificacion").value=emp.calificacion;
    }

    {/*Parametrizamos con e de event */}
    {/*Obtenemos los datos ingresados en el form actualizar con getEid*/}
    {/*Con el axios.put pegamos las modificaciones y luego*/}
    {/*Con then la respuesta sera envie un log de confirmacion y actualizar la lista de empresas*/}
    {/*axios.put para actualizacion*/}
    const actualizarEmp=(e)=>{
        e.preventDefault();
        let id=document.getElementById("id").value;
        const objEmpresa={
            nombre:document.getElementById("nombre").value,
            descripcion:document.getElementById("descripcion").value,
            calificacion:document.getElementById("calificacion").value
        }
        axios.put(`${url}/${id}`,objEmpresa)
        .then(resp=>{
            console.log(`Actualizacion correcta`);
            listaEmp();
        })
    }

    return(
        <div>
            <div className="row">
                <p className="lead fs-2 text-primary">Gestor de empresas usando Axios</p>
                <div className="col col-7 border border-2 border-primary shadow m-2 p-2">
                    <ListarEmpresas empresas={empresas} onEliminar={deleteEmp} onEditar={editarEmp}/>
                </div>
                <div className="col col-4 border border-2 border-primary shadow m-2 p-2">
                    <RegistrarEmpresa url={url} onListar={listaEmp} />
                </div>
            </div>  

            {/*Modal para actualizar*/}

            {/*Ventana modal para el editar y actualizar*/}
            <div className="modal fade" id="modal" tabIndex="-1" aria-hidden="true" data-bs-backdrop="false">            
                <div className="modal-dialog">
                    <form onSubmit={actualizarEmp}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Actualizar Empresa</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <input type="hidden" id="id"/>
                                    <label className="lead text-primary label">Nombre</label>
                                    <input type="text" id="nombre" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label className="lead text-primary label">Descripcion</label>
                                    <input type="text" id="descripcion" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label className="lead text-primary label">Calificacion</label>
                                    <input type="text" id="calificacion" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-sm btn-warning mt-3"
                                    data-bs-dismiss="modal">
                                        Actualizar
                                    </button>
                                </div>
                                <div>
                                    
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
    

}

export default GestorEmpresasAxios;