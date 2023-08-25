import { bancoFO } from "./funciones.js";

const{fnTC} = bancoFO;

let dolares=2000;
let TC=4.2;
let soles=fnTC(TC)*dolares;
console.log(`El tipo de cambio es en la mañana ${TC}, por tanto $${dolares} es S/.${soles}`);

TC=4.6;
soles=fnTC(TC)*dolares;
console.log(`El tipo de cambio es en la mañana ${TC}, por tanto $${dolares} es S/.${soles}`);
