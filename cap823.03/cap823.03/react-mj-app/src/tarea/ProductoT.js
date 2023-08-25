import { useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";
import ListaT from "./ListaT";

const ProductoT = () => {

    const [cantidad, setCantidad] = useState(0);

    const { id } = useParams();
    const { Tarea } = data;
    const producto = Tarea.find((tarea) => tarea.id === Number(id))

    const subirCantidad = () => {
        setCantidad(
            cantidad => cantidad + 1
        )
    }

    const bajarCantidad = () => {
        setCantidad(
            (cantidad === 0 ? 0 : cantidad - 1)
        )
    }

    const AnadirCarrito = () => {

    }

    return (
        <div className="row">
            <form>
                <div className="col col-4">
                    <p className="text-primary fs-2">Precio: {producto.precio} </p>
                </div>
                <div className="col col-2 text-primary">
                    <input value={cantidad} type="text" className="form-control" />
                </div>
                <div>
                    <p className="text-primary">Total: {producto.precio * cantidad} </p>
                </div>
                <div className="col col-1">
                    <button className="form-control" onClick={subirCantidad} >↑</button>
                </div>
                <div className="col col-1">
                    <button className="form-control" onClick={bajarCantidad} >↓</button>
                </div>
                <img src={producto.imagen} />

                <input type="submit" value="Añadir al carrito" className="form-control" />


            </form>

        </div>
    )
}

export default ProductoT;