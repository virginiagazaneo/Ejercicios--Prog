//Almacene N numeros ingresados por el usuario e imprima la cantidad de negativos, positivos y ceros.
import * as rls from "readline-sync";

let dim : number = rls.questionInt("Ingrese la dimension del arreglo: ");
let arr1 : number[] = new Array(dim)
let positivos : number = 0;
let negativos : number = 0;
let ceros : number = 0;


    if (arr1.length === 0) {
        console.log(" ingresar un arreglo que no sea vacio");
    }
    for(let i : number = 0; i< arr1.length; i++){
        arr1[i] = rls.questionInt(`ingrese el numero del arreglo en posicion ${i + 1}:`);
        if(arr1[i] > 0) {
            positivos = positivos + 1;
        }
        else if(arr1[i] < 0){
            negativos = negativos + 1;
        }
        else {
            ceros = ceros + 1;
        }
    }
    console.log(arr1);
    console.log(" los positivos son:", positivos, "los negativos son:", negativos, "los ceros son:", ceros);

