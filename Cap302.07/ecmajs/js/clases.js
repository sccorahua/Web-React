export class CCalculadora{
    constructor(a,b){
        this.a=a;
        this.b=b;
    }

    detalle(){
        console.log("Los parametros son: a=",this.a," y b=",this.b);
    }

    suma(){
        console.log("La suma es:", (this.a+this.b));
    }

    multiplicacion(){
        console.log("La multiplicacion es:",(this.a+this.b));
    }

    operar(simbolo){
        switch(simbolo){
            case "+":{
                console.log("Se eligio como operador suma entonces:");
                this.suma();
                break;
            }

            case "*":{
                console.log("Se eligio como operador multiplicacion entonces:");
                this.multiplicacion();
                break;
            }

            default:{
                console.log("No es un operador valido");
                break;
            }

        }
            
    }
}