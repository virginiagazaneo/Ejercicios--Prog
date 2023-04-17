//algoritmo para calculo de potencias
import * as rls from "readline-sync";

let base : number = rls.questionInt("ingrese la base de la potencia a calcular: ");
let exponente : number = rls.questionInt("ingrese el exoponente de la potencia a calcular: ");

function calcularPotencia(base : number, exponente : number) {
  let resultado : number = 1
   if (exponente == 0){
      resultado = 1
   }
  for(let x : number = 1; x <= exponente; x++) {
     resultado = resultado * base
  }
    console.log("el resultado es:", resultado);
  }

  calcularPotencia(base , exponente);