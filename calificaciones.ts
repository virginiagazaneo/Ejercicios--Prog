// ejercicios de calificaciones

import * as rls from "readline-sync";

let alumno : string = "Juan";
let nota, practica, teoria, problemas : number = 0;
let contador : number = 0;


while (alumno !== "") {
    alumno = rls.question("Ingrese el nombre del alumno:");
    if(alumno != ""){
    practica = rls.questionFloat("Ingrese la nota de la parte practica:");
    problemas = rls.questionFloat("Ingrese la nota de la parte problemas:");
    teoria = rls.questionFloat("Ingrese la nota de la parte teorica:");
    nota = practica * 0.1 + problemas * 0.5 + teoria * 0.4;
    }
    if(nota >= 0 && nota <= 10){
        console.log("Alumno: ", alumno, "Nota: ", nota);
        //contador = contador + 1;
    }
    if(practica < 0 || practica > 10 || problemas < 0 || problemas > 10 || teoria < 0 || teoria >10){
        console.log("error de notas");  
    }
    if(nota > 10 || nota < 0){
        console.log("error de notas");
    }
contador = contador + 1;
}
console.log("No hay mas alumnos para ingresar");
