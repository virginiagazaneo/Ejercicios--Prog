/*Diseñar un algoritmoque recorra las butacas de una sala de cine y determine cuantas butacas desocupadas hay.
suponga que para modelar este problema , se utiliza un arriglo con valores logicos.
La presencia de un valor verdaderp(true) en arreglo indica la butaca ocupada
La presencia de un valor faldo (false) en el arreglo indica la butaca desocupada.*/
/* crear butacas random como ocupadas
function randomNumbers(top : number ): number {
    return Math.floor(Math.random() * top);
}
function fillRandom(arr : number[], longitud : number, top : number): void {
    for(let i : number = 0; i < longitud; i++){
        arr.push(randomNumbers(top));
    }
}*/
//let butacasTotales : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43 ,44, 45, 46, 47, 48, 49, 50];// butacas totales
//fillRandom(butacasTotales, 50, 50);
//console.log(butacasTotales);
var butacasOcupadas = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]; // butacas ocupadas
//fillRandom(butacasOcupadas, 15, 50);
console.log(butacasOcupadas);
function contarButacas(butacasOcupadas) {
    var llenas = false;
    var vacias = true;
    var suma = 0;
    for (var i = 0; i < butacasOcupadas.length; i++) {
        if (butacasOcupadas[i] === 0) {
            vacias = false;
            suma = suma + 1;
        }
        else {
            llenas = true;
        }
    }
    return (suma);
}
var suma = contarButacas(butacasOcupadas);
console.log("Las butacas desocupadas son: ", suma);
