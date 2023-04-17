"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var base = rls.questionInt("Ingrese la base del triangulo: ");
var altura = rls.questionInt("Ingrese la altura del triangulo: ");
function calcularAreaTriangulo(base, altura) {
    var area;
    area = (base * altura) / 2;
    return area;
}
var area = calcularAreaTriangulo(base, altura);
console.log("El area es: ", area);
