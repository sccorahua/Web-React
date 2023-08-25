import { useParams } from "react-router-dom";
import { data } from "../data";
import ProductoT from "./ProductoT";

const CarritoT=()=>{
    //const{id,cantidad}=useParams();
    const{Tarea}=data;

    return(
        <div>
            <p className="text-primary fs-2">Carrito de compras</p>
        </div>
    )

}

export default CarritoT;