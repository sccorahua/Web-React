import { Component } from "react";

class ContadorC extends Component{
    state={
        contador:5,
        contadorAuto:0
    }

    decrementarC=()=>{
        this.setState(
            {
                contador:this.state.contador-1
            }
        )
    }

    incrementarC=()=>{
        this.setState(
            {
                contador:this.state.contador+1
            }
        )
    }

    incrementarCAuto=()=>{
        this.setState(
            {
                contadorAuto:this.state.contadorAuto+1
            }
        )
    }
    componentDidMount=()=>{
        this.id=setInterval(() => {
            this.incrementarCAuto();
        }, 1000);
    }

    componentWillUnmount=()=>{
        clearInterval(this.id);
    }

    render(){
        return(
            <div>
                <p className="lead fs-2 text-primary">Contador Clase con Estado: {this.state.contador} </p>
                <button className="btn btn-primary btn-sm me-2" onClick={this.incrementarC} >Incrementar</button>
                <button className="btn btn-danger btn-sm" onClick={this.decrementarC} >Decrementar</button>
                <p className="lead fs-2 text-primary">Contador Automatico con Estado: {this.state.contadorAuto} </p>
            </div>
        )
    }
}

export default ContadorC;