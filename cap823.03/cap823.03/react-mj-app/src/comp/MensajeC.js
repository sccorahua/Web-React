import { Component } from "react";

//todo react no llama a return se tiene que usar render y dentro el return
class MensajeC extends Component{
    render(){
        const{remitente,mensaje}=this.props;
        return(
            <div>
                <p className="border border-2 border-primary">El {remitente} envia el mensaje: {mensaje} </p>
            </div>
        )
    }
    
}

export default MensajeC;