const Mensaje=(props)=>{
    //destructurizando
    const{msg,prioridad}=props;
    const estiloP={
        color:'white',
        backgroundColor:'black',
        margin:'20px',
        padding:'10px'
    }
    const fnAplicaPrioridad=(prioridad)=>{
        console.log(`${prioridad}`);
        let estilo="";
        switch (prioridad) {
            case "alta":
                estilo="bg-dark text-white"
                break;
            case "intermedia":
                estilo="text-info"
                break;
            case "baja":
                estilo="text-warning"
                break;
            default:
                break;
        }
        return estilo;
    }
    return(
        /*
        <div>
            <div>
                <p className="border border-2 border-primary m-2 p-2 shadow">
                    Mensaje recibido {props.msg}
                </p>
            </div>
        </div>
        */
       //ahora usando destructizacion
       <div>
            <div className="border border-2 border-primary m-2 p-2 shadow">
                <p style={{backgroundColor:'yellowgreen',padding:'10px',color:'white',width:'fit-content'}} >Agenda</p>
                <div className="col col-7">
                    <div className="card-header bg-primary text-white">
                        <p> 
                            Mensaje recibido {msg}
                        </p>
                    </div>
                </div>
                <div className="col col-5">
                    <div className="border border-2 border-primary m-2 p-2 shadow">    
                        <p className={fnAplicaPrioridad(prioridad)} >
                            Prioridad {prioridad}
                        </p>
                    </div>
                </div>
                <p style={estiloP}>
                    Contiene un estilo que proviene de un obejto js
                </p>
            </div>
        </div>
    )
}

export default Mensaje;