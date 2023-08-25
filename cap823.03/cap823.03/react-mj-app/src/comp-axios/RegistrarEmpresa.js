import { useState } from "react";
import axios from "axios";

const RegistrarEmpresa=(props)=>{

    const{url,onListar}=props;
    
    const objEmpresa={
        id:0,
        nombre:"",
        descripcion:"",
        calificacion:0
    }
    const[empresa,setEmpresa]=useState(objEmpresa);

    //2.1 pasamos parametro el event=e permite identificar los input que manejaremos en el control
    const manejadorControles=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        empresa[name]=value;
        setEmpresa(empresa);
    }

    const manejadorSubmit=(e)=>{
        e.preventDefault();
        axios.post(`${url}/`,empresa)
        .then(resp=>{
                console.log(`se registro correctamente`);
                document.getElementById("formid").reset();
                onListar();
            })
    }


    return(
        <div>
            <p className="lead fs-2 text-primary">Registrar Empresa</p>
            <form onSubmit={manejadorSubmit} id="formid">
                <div className="form-group">
                    <label className="form-label">Nombre</label>
                    <input type="text" name="nombre" className="form-control lead" required onChange={manejadorControles}/>
                </div>
                <div className="form-group">
                    <label className="form-label">Descripcion</label>
                    <input type="text" name="descripcion" className="form-control lead" required onChange={manejadorControles}/>
                </div>
                <div className="form-group">
                    <label className="form-label">Calificacion</label>
                    <input type="text" name="calificacion" className="form-control lead" required onChange={manejadorControles}/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-sm mt-3">Registrar</button>
                </div>
            </form>
        </div>
    )
}

export default RegistrarEmpresa;
