//escribir la cantidad de divisores del numero ingresado
import * as rls from "readline-sync";

let numEnt : number = rls.questionInt(" Ingrese un numero entero: ");

function cantDeDivisores( numEnt : number) {
    let divisores : number = 0;
    let cantidad : number = 0;
    for(let x : number = 1; x <= numEnt; x++){
        cantidad = cantidad + 1;
        if (numEnt % x == 0) {
            divisores = divisores + 1;
        }
    }
    console.log("La cantidad de divisores es: ", divisores,);
}
cantDeDivisores(numEnt);







/*function esMultiplo( parm1 : number, parm2 : number) {
    let resultado : boolean;
    if(parm1 % parm2 == 0) {
        resultado = true
    }
    else {  
        resultado = false
    }
    console.log("Los parametros ingresados no son multiplos?: ", resultado);

}*/
