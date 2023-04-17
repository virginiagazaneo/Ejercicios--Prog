"use strict";
/*Diseñar un algoritmo que muestre por pantalla la tabla de
multiplicación del número ingresado por el usuario
Para definir hasta qué número desea que muestre la tabla de
multiplicación, el usuario también deberá ingresar dicho valor

Ingrese el número:  9
Ingrese hasta qué número: 4
9 x 1 = 9
9 x 2 = 18
9 x 3 = 27
9 x 4 = 36 */
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var tabla = rls.questionInt("Ingrese el numero de la tabla que quiere visualizar:  ");
var num = rls.questionInt("Ingrese la cantidad de resultados que quiere visualizar de la tabla: ");
var result;
for (var i = 1; i <= num; i++) {
    result = tabla * i;
    console.log("".concat(tabla), "x", "".concat(i), "=", result);
}
