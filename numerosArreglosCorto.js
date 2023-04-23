"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Almacene N numeros ingresados por el usuario e imprima la cantidad de negativos, positivos y ceros.
var rls = require("readline-sync");
var dim = rls.questionInt("Ingrese la dimension del arreglo: ");
var arr1 = new Array(dim);
function cargarArreglo(arr) {
    if (arr.length === 0)
        return;
    for (var i = 0; i < arr.length; i++) {
        arr[i] = rls.questionInt("ingrese el numero del arreglo en posicion ".concat(i + 1, ":"));
    }
    console.log(arr);
}
function printEnteros(arr) {
    var positivos = 0;
    var negativos = 0;
    var ceros = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positivos = positivos + 1;
        }
        else if (arr[i] < 0) {
            negativos = negativos + 1;
        }
        else {
            ceros = ceros + 1;
        }
    }
    return { positivos: positivos, negativos: negativos, ceros: ceros };
}
cargarArreglo(arr1);
var _a = printEnteros(arr1), positivos = _a.positivos, negativos = _a.negativos, ceros = _a.ceros;
console.log(" los positivos son:", positivos, "los negativos son:", negativos, "los ceros son:", ceros);
