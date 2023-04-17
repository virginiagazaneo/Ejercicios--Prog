import * as rls from "readline-sync";

let base : number = rls.questionInt("Ingrese la base del triangulo: ")
let altura : number = rls.questionInt("Ingrese la altura del triangulo: ");

function calcularAreaTriangulo (base : number , altura : number) {
    let area : number;
        area = (base * altura) / 2;
        
console.log(area);
}

calcularAreaTriangulo (base , altura);

