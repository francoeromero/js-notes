const txtop1 = document.getElementById("op1");
const txtoperador = document.getElementById("operador");
const txtop2 = document.getElementById("op2");
const btncalcular = document.getElementById("calcular");
const presultado = document.getElementById("resultado");
console.log(txtop1);

btncalcular.addEventListener('click', calcular)
function calcular(){
    console.log("apretaste calcular");
}