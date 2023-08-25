//usando hook o useState
import { useEffect, useState } from "react";

const ContadorF=()=>{
    const[contador,setContador]=useState(0);
    const[contadorAuto,setContadorAuto]=useState(0);

    const incrementar=()=>{
        setContador(
            contador=>contador+1
        )
        }
    
    const decrementar=()=>{
        setContador(
            contador=>(contador===0?0:contador-1)
        )
        }
        const incrementarAuto=()=>{
            setContadorAuto(
                contadorAuto=>(contadorAuto===10?0:contadorAuto+1)
            )
            }    


    useEffect(()=>{
        //DidMount osea renderiza
        const id=setInterval(() => {
            incrementarAuto()
        }, 1000);
        //WillUnmount destruye y devuelve al momento de destruir al clearInterval
        return ()=>clearInterval(id);
    }, contadorAuto
    )

    return(
        <div>
            <p className="lead fs-2 text-success fw-bold">Contador funcion (Hooks) {contador} </p>
            <button className="button btn-primary btn-sm" onClick={incrementar}>Incrementar</button>
            <button className="button btn-danger btn-sm" onClick={decrementar}>Decrementar</button>

            <p className="lead fs-2 text-success fw-bold">Contador automatico funcion (Hooks) {contadorAuto} </p>
        </div>
    )
}

export default ContadorF;