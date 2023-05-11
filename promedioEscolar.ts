/* Desarrolle un algoritmo que permita cargar alumnos y sus notas en los trimestres.
Se debe permitir obtener el promedio anual de un alumno (promedio de sus 3 notas).
Luego de resolverlo, pensar en aprovechar metodos y discutir como representar la info.*/

import * as rls from "readline-sync";
let cantAlum : number = rls.questionInt("Ingrese la cantidad de alumnos a ingresar: ");
let alumno : string[]= new Array(cantAlum);
let cantNotas : number = 3;
let notasTrim1: number[] = new Array(cantAlum);
let notasTrim2: number[] = new Array(cantAlum);
let notasTrim3: number[] = new Array(cantAlum);

function cargarBoletines(notasTrimA : number[], notasTrimB: number[], notasTrimC : number[]): void {
let suma : number[] = []
let prom : number[] = []
    for(let i : number = 0; i < notasTrimA.length; i++){
    alumno[i] = rls.question("Ingrese el nombre del alumno: ");
    notasTrimA[i] = rls.questionFloat(`Ingrese la nota del trimestre ${i + 1}: `);
    notasTrimB[i] = rls.questionFloat(`Ingrese la nota del trimestre ${i + 1}: `);
    notasTrimC[i] = rls.questionFloat(`Ingrese la nota del trimestre ${i + 1}: `);
    suma[i] = notasTrimA[i] + notasTrimB[i] + notasTrimC[i];
    prom[i] = suma[i] / cantNotas;

console.log(`Alumno ${i+1}: ${alumno[i]} \nSus notas Trimestrales son:${notasTrimA[i]}, ${notasTrimB[i]}, ${notasTrimC[i]} \ny su promedio es:${prom[i]}`);
}
}

cargarBoletines(notasTrim1, notasTrim2, notasTrim3);


