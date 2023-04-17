"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// algortimo para calculo de si son multiplos los parametros ingresados
var rls = require("readline-sync");
var parm1 = rls.questionInt("Ingrese el primer parámetro: ");
var parm2 = rls.questionInt("Ingrese el segundo parametro: ");
function esMultiplo(parm1, parm2) {
    var resultado;
    if (parm1 % parm2 == 0) {
        resultado = true;
    }
    else {
        resultado = false;
    }
    console.log("Los parametros ingresados son multiplos?: ", resultado);
}
esMultiplo(parm1, parm2);
