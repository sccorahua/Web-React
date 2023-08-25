import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementar, incrementar } from "./features/contador";

//VISTA
const ContadorUI=()=>{

    const contador=useSelector(state=>state.contador);

    //hook useDispatch - para asociarlo y sea la cadena entre el contador y UI
    const dispatch=useDispatch();
    
    const incrementarAuto=()=>{
        dispatch(incrementar());
    }

    useEffect(()=>{
        let x=setInterval(() => {
            incrementarAuto();      
        }, 1000);
        return ()=>clearInterval(x);
    })

    return(
        <div>
            <p className="lead fs-2 text-primary">
                Contador con Redux y Redux-toolkit
            </p>
            <p className="lead fs-2 text-primary">Contador: {contador.value} </p>
            {/*Al ser por ()=> usar () para llamar al metodo ya que es un callback*/}
            <button className="btn btn-primary me-4" onClick={()=>dispatch(incrementar()) }>Incrmentar</button>
            <button className="btn btn-danger" onClick={()=>dispatch(decrementar()) }>Decrecrmentar</button>
        </div>
    )
}

export default ContadorUI;