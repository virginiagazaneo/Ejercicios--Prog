"use strict";
// Ejercicio de probabilidades y cantidad de dados
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var factor = 1 / 6;
var n = 0;
var resultado = 0;
n = rls.questionInt("Ingrese la cantidad de dados a usar");
resultado = Math.pow((factor), (n));
console.log("La probabilidad de sacar un 6 tirando esa cantidad de dados es:", resultado);
