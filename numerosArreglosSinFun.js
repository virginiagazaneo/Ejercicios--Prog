"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Almacene N numeros ingresados por el usuario e imprima la cantidad de negativos, positivos y ceros.
var rls = require("readline-sync");
var dim = rls.questionInt("Ingrese la dimension del arreglo: ");
var arr1 = new Array(dim);
var positivos = 0;
var negativos = 0;
var ceros = 0;
if (arr1.length === 0) {
    console.log(" ingresar un arreglo que no sea vacio");
}
for (var i = 0; i < arr1.length; i++) {
    arr1[i] = rls.questionInt("ingrese el numero del arreglo en posicion ".concat(i + 1, ":"));
    if (arr1[i] > 0) {
        positivos = positivos + 1;
    }
    else if (arr1[i] < 0) {
        negativos = negativos + 1;
    }
    else {
        ceros = ceros + 1;
    }
}
console.log(arr1);
console.log(" los positivos son:", positivos, "los negativos son:", negativos, "los ceros son:", ceros);
