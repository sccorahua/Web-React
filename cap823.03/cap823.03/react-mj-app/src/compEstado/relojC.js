import { Component } from "react";

class RelojC extends Component{

    state={
        fecha:new Date()
    }

    actualizarFecha=()=>{
        this.setState(
            {
                fecha:new Date()
            }
        )
    }

    componentDidMount=()=>{
        this.fechaI=setInterval(() => {
            this.actualizarFecha();
        }, 1000);
    }

    render(){
        return(
            <div>
                <p className="lead fs-2 text-primary">Fecha: {this.state.fecha.toLocaleString()} </p>
            </div>
        )
    }
}

export default RelojC;