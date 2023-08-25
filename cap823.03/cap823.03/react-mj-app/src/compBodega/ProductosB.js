import { NavLink, Outlet } from "react-router-dom";
import { data } from "../data";

const ProductosB=()=>{
    
    const{productosB}=data;

    const estiloPrendido={
        color:'green',
        textDecoration:'none'
    }

    const estiloApagado={
        textDecoration:'none'
    }

    return(
        <div>
            <p className="lead fs-2 text-primary">Total de productos en la bodega {productosB.length} </p>
            <div className="row">
                <div className="col col-6">
                    <div className="border border-2 border-primary p-2 shadow">
                        {
                            productosB.map((prod)=>(
                                    <div key={prod.id}>
                                        <p className="lead fs-4 text-primary">
                                            {/*Entonces cada vez que demos clic a un producto añadira el id del producto*/}
                                            <NavLink to={`/productos-bodega/${prod.id}`}
                                                style={({isActive})=>(isActive?estiloPrendido:estiloApagado)}
                                            >
                                                {prod.nombre}
                                            </NavLink>
                                        </p>        
                                    </div>
                                ))
                        }
                    </div>
                    {/*Llamamos al detalle, usando un outlet, significa usando algo que se usa internamente en un ruta anidada se vincula con un alias, un outlet*/}
                </div>
                <div className="col col-5">
                    <div className="border border-2 border-primary shadow p-2">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductosB;