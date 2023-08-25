import { useEffect, useState } from "react";

const RelojF=()=>{
    
    //el setFecha tiene que ser llamado dentro de otra funcion
    const[fecha,setFecha]=useState(new Date());

    const updateFecha=()=>{
        setFecha(
            fecha=>new Date()
        )
    }

    useEffect(()=>{
        const id=setInterval(() => {
            updateFecha()
        }, 1000);
        return ()=>clearInterval(id);
    },fecha
    )

    return(
        <div>
            <p className="lead fs-2">Reloj Hook: {fecha.toLocaleString()} </p>
        </div>
    )
}

export default RelojF;