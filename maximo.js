"use strict";
/* Leer valores hasta que se introduzca un cero (0)
• El usuario puede introducir valores positivos y negativos
• Encontrar el máximo de los elementos que se introdujeron
• Analizar cómo cambia el programa para hallar el mínimo
Ingrese número: 9
Ingrese número: 7
Ingrese número: -1
Ingrese número: 1
Ingrese número: 0
El máximo es 9 */
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var num = rls.questionInt("ingrese un numero entero: ");
var maxValue = 1;
while (num !== 0) {
    if (num >= maxValue) {
        maxValue = num;
    }
    num = rls.questionInt("vuelva a ingresar un numero entero: ");
}
console.log(" el numero ingresado es 0 calcular el maximo");
console.log(" el maximo es:", maxValue);
