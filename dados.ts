// Ejercicio de probabilidades y cantidad de dados

import * as rls from "readline-sync";
const factor : number = 1/6;
let n : number = 0;
let resultado : number = 0;



n = rls.questionInt("Ingrese la cantidad de dados a usar");
resultado = (factor)**(n);
console.log("La probabilidad de sacar un 6 tirando esa cantidad de dados es:", resultado);
