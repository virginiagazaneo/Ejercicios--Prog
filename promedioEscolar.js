"use strict";
/* Desarrolle un algoritmo que permita cargar alumnos y sus notas en los trimestres.
Se debe permitir obtener el promedio anual de un alumno (promedio de sus 3 notas).
Luego de resolverlo, pensar en aprovechar metodos y discutir como representar la info.*/
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var cantAlum = rls.questionInt("Ingrese la cantidad de alumnos a ingresar: ");
var alumno = new Array(cantAlum);
var cantNotas = 3;
var notasTrim1 = new Array(cantAlum);
var notasTrim2 = new Array(cantAlum);
var notasTrim3 = new Array(cantAlum);
function cargarBoletines(notasTrimA, notasTrimB, notasTrimC) {
    var suma = [];
    var prom = [];
    for (var i = 0; i < notasTrimA.length; i++) {
        alumno[i] = rls.question("Ingrese el nombre del alumno: ");
        notasTrimA[i] = rls.questionFloat("Ingrese la nota del trimestre ".concat(i + 1, ": "));
        notasTrimB[i] = rls.questionFloat("Ingrese la nota del trimestre ".concat(i + 1, ": "));
        notasTrimC[i] = rls.questionFloat("Ingrese la nota del trimestre ".concat(i + 1, ": "));
        suma[i] = notasTrimA[i] + notasTrimB[i] + notasTrimC[i];
        prom[i] = suma[i] / cantNotas;
        console.log("Alumno ".concat(i + 1, ": ").concat(alumno[i], " \nSus notas Trimestrales son:").concat(notasTrimA[i], ", ").concat(notasTrimB[i], ", ").concat(notasTrimC[i], " \ny su promedio es:").concat(prom[i]));
    }
}
cargarBoletines(notasTrim1, notasTrim2, notasTrim3);
