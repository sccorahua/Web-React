import { data } from "../data"
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const ListaT=()=>{
    const{Tarea}=data;


    return(
        <div>
            <p className="text-primary">Lista de productos de tienda de ropa</p>
            <div className="row">
                <div className="col col-6">
                    <div className="border border-2 border-primary p-2 shadow">
                        {
                            Tarea.map((tarea)=>(
                                    <div key={tarea.id}>
                                        <p className="lead fs-4 text-primary">
                                            <NavLink to={`/t-producto/${tarea.id}`}>
                                                {tarea.nombre}
                                            </NavLink>
                                        </p>        
                                    </div>
                                ))
                        }
                    </div>
                </div>
                <div className="col col-6">
                    <div className="border border-2 border-primary shadow p-2">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ListaT;