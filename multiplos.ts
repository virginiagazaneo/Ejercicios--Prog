// algortimo para calculo de si son multiplos los parametros ingresados
import * as rls from "readline-sync";

let parm1 : number = rls.questionInt("Ingrese el primer parámetro: ");
let parm2 : number = rls.questionInt("Ingrese el segundo parametro: ");

function esMultiplo( parm1 : number, parm2 : number) {
    let resultado : boolean;
    if(parm1 % parm2 == 0) {
        resultado = true
    }
    else {
        resultado = false
    }
    console.log("Los parametros ingresados son multiplos?: ", resultado);

}
esMultiplo(parm1, parm2);

