import { Component } from "react";

class TableroCursos extends Component{
    render(){
        const{cursos}=this.props;
        return(
            <div>
                <p className="lead fs-2">Cursos mostrados en una tabla</p>
                <div className="row">
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Nivel</th>
                                <th>Descripcion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cursos.map((curso,index)=>(
                                    <tr key={index}>
                                        <td>{curso.nombre} </td>
                                        <td>{curso.nivel} </td>
                                        <td>{curso.descripcion} </td>
                                    </tr>
                                )
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default TableroCursos;