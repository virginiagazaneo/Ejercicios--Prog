//Almacene N numeros ingresados por el usuario e imprima la cantidad de negativos, positivos y ceros.
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

function printPositivos(arr : number[]): number {
        let positivos : number = 0;
         for(let i : number = 0; i< arr.length; i++) {
        if(arr[i] > 0){
            positivos = positivos + 1;
        }
    }
    return positivos;
}
 
function printNegativos(arr : number[]): number {
    let negativos : number = 0;
     for(let i : number = 0; i< arr.length; i++) {
    if(arr[i] > 0){
        negativos = negativos + 1;
    }
}
return negativos;
}

function printCeros(arr : number[]): number {
    let ceros : number = 0;
     for(let i : number = 0; i< arr.length; i++) {
    if(arr[i] == 0){
        ceros = ceros + 1;
    }
}
return ceros;
}

cargarArreglo(arr1);
const positivos : number = printPositivos(arr1);
const negativos : number = printNegativos(arr1);
const ceros : number = printCeros(arr1);
console.log(" los positivos son:", positivos, "los negativos son:", negativos, "los ceros son:", ceros);
