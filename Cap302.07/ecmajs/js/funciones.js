export const bancoFO={
    arreglo:[20,30,50],arreglo1:[20,30,50,60],
    //tipoCambioDS:4.1,
    fnTC:(tipoCambioDS)=>{
        return tipoCambioDS;
    },
    //para funciones se agrega al inicio el nombre de la funcion por ejeplo sum:
    sum:function sum(numeros){
        let resultado = 0;
        for (let i = 0; i < numeros.length; i++) {
            resultado += numeros[i];
        }
        return resultado;
    },
    objetoCirculo:{
        area:function(radio){
            const PI=3.1416;
            return PI*radio*radio;
        },
        tipoFigura:"Es un circulo",
        mensaje:function(saludo){
            console.log("mensaje:",saludo);
        }
    },
    observacion: "Estoy usando el concepto de destructuring e import de una propiedad import"
} 