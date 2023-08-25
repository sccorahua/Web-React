const ProductoBUI=(props)=>{

    const{productosB,indice}=props;

    return (
        <div>
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
        </div>
    )
}

export default ProductoBUI;