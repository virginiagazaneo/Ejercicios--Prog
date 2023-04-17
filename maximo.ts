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

import * as rls from "readline-sync";
let num : number = rls.questionInt("ingrese un numero entero: ");
let maxValue : number =1;



while(num !== 0) {
          
    if(num >= maxValue) {
    maxValue = num;
    }
    num = rls.questionInt("vuelva a ingresar un numero entero: ");
}
console.log(" el numero ingresado es 0 calcular el maximo");
console.log(" el maximo es:", maxValue);

