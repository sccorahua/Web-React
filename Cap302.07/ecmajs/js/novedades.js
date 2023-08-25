//clases
//alt+96 comilla inversa `
import { CCalculadora } from "./clases.js";
import { bancoFO } from "./funciones.js";

console.log("Estas son las clases");
let ClassCalculadora = new CCalculadora(10,20);
ClassCalculadora.detalle();
ClassCalculadora.suma();
ClassCalculadora.multiplicacion();
ClassCalculadora.operar("+");

//

//Novedad de template literals o comilla inversa `` (alt+96)
const saludando=(nombre,genero='Sr.',msg="Hola")=>{
    return `${msg}! ${genero} ${nombre}`
}

console.log(saludando('Manuel'));

const saludandoV2=(nombre,indicador,msg)=>{
    let genero = '';
    if(indicador===1){
        genero = 'Señor';
    }else if(indicador===2){
        genero = 'Señorita';
    }

    console.log(`mensaje: ${msg} dirigido a: ${genero} ${nombre}`);
}

saludandoV2('Ricardo',1,'Reunion daily proyecto Banca');

//destructurizacion - arreglo
let arregloD=[100,200,300];
const[a,,c]=arregloD; //aca se destructuriza
console.log(`Destructurizando: a=${a} y c=${c}`);
let ClassCalculadora1 = new CCalculadora(a,c);
ClassCalculadora.operar("+");

//destructurizacion - objeto
const usuario={
    nombre:"Pedro",
    apellidos:"Lagos Rojas",
    genero:"Sr.",
    correo:"plagos@gmail.com"
}
const{nombre,correo,apellido}=usuario; //aca se destructuriza
console.log(`Usuario registrado es: ${nombre} y su correo es ${correo}`);
console.log(`Usuario registrado es: ${usuario.nombre} y su correo es ${usuario.correo}`); //si no se hubiese destructurizado

//destructurizando para el ejercicio de arreglos con let
//se puede instanciar en distintas variables el mismo objeto
const {arreglo,arreglo1,sum} = bancoFO;
const {objetoCirculo,observacion,/*tipoCambioDS*/fnTC} = bancoFO;

console.log(`Observacion enviada ${observacion}`);

/////////////////////////////////////////////////////////////////////////

console.log('Bienvenidos');

//Uso de let
/* Enviamos tmb a funciones.js
function sum(numeros){
    let resultado = 0;
    for (let i = 0; i < numeros.length; i++) {
        resultado += numeros[i];
    }
    return resultado;
}
*/
console.log("Revision de novedades");
console.log("La suma es",sum([1,2,3,4,5]));

//sacamos el arreglo hacia funciones.js let arreglo = [20,30,50];
//arreglo1 = [20,30,50,60];
console.log("La suma ingresado de la variable arreglo es:",sum(arreglo));
arreglo.push(20);
console.log("La suma ingresado de la variable arreglo es:",sum(arreglo));
console.log("La suma ingresado de la variable arreglo1 es:",sum(arreglo1));
//Uso de cons
/*Tmb va para funciones.js
let objetoCirculo={
    area:function(radio){
        const PI=3.1416;
        return PI*radio*radio;
    },
    tipoFigura:"Es un circulo",
    mensaje:function(saludo){
        console.log("mensaje:",saludo);
    }
}
*/
console.log(objetoCirculo.tipoFigura);
console.log("El valor del area del circulo es:",objetoCirculo.area(10));
objetoCirculo.mensaje("Es nuestra primera revision de las novedades...");

//Uso de const y la declaracion function anonimas
const fnSuma=function(arreglo) {
    let rpta = 0;
    for (let index = 0; index < arreglo.length; index++) {
        rpta += arreglo[index];
    }
    //En vez de retornar usar un console.log
    //return rpta;
    console.log("La suma del arreglo usando una funcion anonima es:",rpta);
}

fnSuma(arreglo);

//novedad Spread Operator permite clonar o realizar una copia
console.log(`El minimo valor es ${Math.min(...arreglo)} del arreglo ${arreglo}`);

const obj1={user:'Graciela',email:'glagos@gmail.com',age:20};
const obj2={...obj1} //clonacion, mantiene una copia separada del original

let objeto3=obj1;
obj1.age=30;
console.log(objeto3.age); //devuelve 30
console.log(obj2.age); //devuelve 20

    //uso de TC DS
let dolares=1000;
    //let soles=tipoCambioDS*dolares;
let fecha=new Date();
let soles=fnTC(4.1)*dolares;
console.log(`para la fecha ${fecha}: $${dolares} equivalen a S/.${soles}`);

//novedad promise asincrona
console.log(`Novedad de promise`);
const API='https://jsonplaceholder.typicode.com/posts?_limit=10';

fetch(API) //por cada registro de API
.then(res=>res.json()) //entonces res validara si ese res es un json(osea lo convierte)
.then(data=>{ //entonces llega a data 
    console.log(data); //muestra en consola los valores de data
})