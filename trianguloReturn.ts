import * as rls from "readline-sync";

let base : number = rls.questionInt("Ingrese la base del triangulo: ")
let altura : number = rls.questionInt("Ingrese la altura del triangulo: ");

function calcularAreaTriangulo (base : number , altura : number): number {
    let area : number;
        area = (base * altura) / 2;
        
return area;
}

let area = calcularAreaTriangulo (base , altura);
console.log("El area es: ", area);
