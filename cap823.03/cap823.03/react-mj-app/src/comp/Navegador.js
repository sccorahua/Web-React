import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import RelojC from "../compEstado/relojC";
import { Link } from "react-router-dom";
import Home from "./Home";
import GestorContadorPublicidadC from "./GestorContadorPublicidadC";
import GestorContadorPublicidadF from "./GestorContadorPublicidadF";
import { data } from "../data";
import Cursos from "./Cursos";
import AppC from "../AppC";
import RelojF from "../compEstado/RelojF";
import ProductosB from "../compBodega/ProductosB";
import ProductoB from "../compBodega/ProductoB";
import ListaT from "../tarea/ListaT";
import ProductoT from "../tarea/ProductoT";
import CarritoT from "../tarea/CarritoT";
import GestorEmpresasAxios from "../comp-axios/GestorEmpresasAxios";
import ContadorUI from "../comp-redux/contadorUI";
import ProductoBodegaUI from "../comp-redux/productoBodegaUI";

const Navegador=()=>{

    const{cursos}=data;

    return(
        
        <div> 
            <nav className="navbar navbar-expand-lg bg-primary navbar-dark shadow">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">React</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/app-c">AppC</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/gestor-cursos-props">Gestor de cursos con props</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/reloj-funcion">Reloj funcion</Link>
                            </li>
                            <li className="nav-item">                                
                                <Link className="nav-link" to="/reloj-clase">Reloj Clase</Link>
                            </li>
                            <li className="nav-item">                                
                                <Link className="nav-link" to="/gestor-contador-publicidad-clase">Gestor Contador Publicidad Clase</Link>
                            </li>
                            <li className="nav-item">                                
                                <Link className="nav-link" to="/gestor-contador-publicidad-funcion">Gestor Contador Publicidad Funcion Hook</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Mas acciones
                                </a>
                                <ul className="dropdown-menu">
                                    <li>                                
                                        <Link className="dropdown-item" to="/productos-bodega">Productos de la bodega</Link>
                                    </li>
                                    <li>                                
                                        <Link className="dropdown-item" to="/t-producto">Productos de tienda de ropa</Link>
                                    </li>
                                    <li>                                
                                        <Link className="dropdown-item" to="/gestor-empresas-axios">Gestor de empresas (axios)</Link>
                                    </li>     
                                    <li>                                
                                        <Link className="dropdown-item" to="/contador-redux">Contador (redux)</Link>
                                    </li>     
                                    <li>                                
                                        <Link className="dropdown-item" to="/bodega-redux">Producto de la bodega (redux)</Link>
                                    </li>                            
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/*Rutas*/}
            <Routes>
                <Route path="reloj-clase" element={<RelojC/>}/>
                <Route path="gestor-contador-publicidad-clase" element={<GestorContadorPublicidadC/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/app-c" element={<AppC/>} />
                <Route path="/reloj-funcion" element={<RelojF/>} />
                <Route path="gestor-contador-publicidad-funcion" element={<GestorContadorPublicidadF/>}/>
                <Route path="/gestor-cursos-props" element= {<Cursos cursos={cursos} indicaTabla="1" indicaTarjeta="1"/>}/>

                <Route path="/productos-bodega" element={<ProductosB/>}>
                    <Route path=":id" element={<ProductoB/>}/>
                </Route>

                <Route path="/t-producto" element={<ListaT/>}>
                    <Route path=":id" element={<ProductoT/>}/>
                </Route>

                <Route path="/gestor-empresas-axios" element={<GestorEmpresasAxios/>}/>

                <Route path="/contador-redux" element={<ContadorUI/>} />
                <Route path="/bodega-redux" element={<ProductoBodegaUI/>} />

                {/*Pagina no encontrada normalmente va en la ultima parte*/}
                <Route path="*" element={<p className="lead fs-2 text-primary">Pagina no Encontrada</p>} />
            </Routes>

        </div>
    )
}
export default Navegador;