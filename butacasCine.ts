/*Diseñar un algoritmoque recorra las butacas de una sala de cine y determine cuantas butacas desocupadas hay.
suponga que para modelar este problema , se utiliza un arriglo con valores logicos.
La presencia de un valor verdaderp(true) en arreglo indica la butaca ocupada
La presencia de un valor faldo (false) en el arreglo indica la butaca desocupada.*/



let butacasOcupadas : number[] = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0] // butacas ocupadas
console.log(butacasOcupadas);


function contarButacas(butacasOcupadas : number[] ) : number {
    let llenas : boolean = false;
    let vacias : boolean = true;
    let suma : number = 0;
    for(let i : number = 0; i< butacasOcupadas.length; i++){
       if(butacasOcupadas[i] === 0) {
       vacias = false
       suma = suma + 1;
    } 
    else {
        llenas = true;
    }
}
return (suma);
}

const suma : number = contarButacas(butacasOcupadas);
console.log("Las butacas desocupadas son: ", suma);
