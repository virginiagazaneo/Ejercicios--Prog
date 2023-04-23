//Almacene N numeros ingresados por usuario e imprima usando funciones cuantos negativos, positivos y ceros hay.
import * as rls from "readline-sync";

let dim : number = rls.questionInt("Ingrese la dimension del arreglo: ");
let arr1 : number[] = new Array(dim)

function cargarArreglo(arr : number[]): void {
    if (arr.length === 0) return;
    for(let i : number = 0; i< arr.length; i++){
        arr[i] = rls.questionInt(`ingrese el numero del arreglo en posicion ${i + 1}:`);
    }
console.log(arr);
}

function printEnteros(arr : number[]):{positivos : number, negativos : number, ceros :number} {
        let positivos : number = 0;
        let negativos : number = 0;
        let ceros : number = 0;
         for(let i : number = 0; i< arr.length; i++) {
        if(arr[i] > 0){
            positivos = positivos + 1;
        }
         else if(arr[i] < 0){
            negativos = negativos + 1;
        }
        else {
            ceros = ceros + 1;
        }
    }
     return {positivos, negativos, ceros};
}
 

cargarArreglo(arr1);
const {positivos, negativos, ceros} = printEnteros(arr1);
console.log(" los positivos son:", positivos, "los negativos son:", negativos, "los ceros son:", ceros);
