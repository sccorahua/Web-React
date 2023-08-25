import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data } from "../data";
import { incrementarIndice } from "./features/prodB";
import ProductoBUI from "./productoBUI";

//VISTA - UI
const ProductoBodegaUI = () => {

    //llamamos al indice
    const indice = useSelector(state => state.producto_bodega);

    const { productosB } = data;

    //1.1 otra forma - prueba
    const productosCB = [...productosB];
    const productosFiltradoCB=productosCB.filter((prod)=>prod.precio<8)

    const dispatch = useDispatch();

    const incrementarIndiceAutomaticamente = () => {
        dispatch(incrementarIndice());
    }

    useEffect(() => {
        let id = setInterval(() => {
            incrementarIndiceAutomaticamente()
        }, 1000);
        {/*No olvidar el return tb es un lambda*/ }
        return () => clearInterval(id);
    })

    return (
        <div className="row">
            <div className="col col-3">
                <div className="lead fs-2 text-primary">
                    <p>Productos de la Bodega(Redux redux-toolkit)</p>
                    <p>Total de productos: {productosB.length} </p>
                    <div className="card shadow border border-2 border-primary">
                        <div className="card-header">
                            Producto:{productosB[indice.value].nombre}
                        </div>
                        <div className="card-footer">
                            <img src={productosB[indice.value].imagen} className="iimg-fluid" width="70%" />
                        </div>
                        <div className="card-body">
                            Precio:{productosB[indice.value].precio}
                        </div>
                        <div className="card-footer">
                            Descripcion:{productosB[indice.value].descripcion}
                        </div>
                    </div>
                </div>
            </div>
            <ProductoBUI productosB={productosB} indice={indice} />
        </div>
    )
}

export default ProductoBodegaUI;