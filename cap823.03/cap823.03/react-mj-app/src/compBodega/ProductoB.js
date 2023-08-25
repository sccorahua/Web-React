import { useParams } from "react-router-dom";
import { data } from "../data";
import ProductosB from "./ProductosB";

const ProductoB=()=>{
    const{id}=useParams();
    const{productosB}=data;
    const producto =productosB.find((prod)=>prod.id===Number(id))

    return(
        <div>
            <p className="lead fs-3">Detalle del producto: Precio S/.{producto.precio} </p>
            <div className="card border border-2 shadow text-primary lead fs-4">
                <div className="card-header">
                    Producto: {producto.nombre}
                </div>
                <div className="card-body">
                    <img src={producto.imagen} alt="producto" className="img-fuild" width={400}/>
                </div>
                <div className="card-footer">
                    Descripcion: {producto.descripcion}
                </div>
            </div>
        </div>
    )
}

export default ProductoB;