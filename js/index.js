/*console.log("hola franz");

var numero = 5;
console.log(numero);

var miVariable = "hola a todos";
console.log(miVariable);

var booleano = true;
console.log(booleano);
/*
tipos de variables cadena numerico y booleano

camelcase FranEsProgramador

; punto y coma es el fin de una linea y hay que pasar a otra, en js es opcional
*/

//mi edad
/*
var edad = 29;
console.log("mi edad es " + edad); // aparece en f12 console
document.write("mi edad es " + edad); //aparece en la pantalla

//se puede tambien asiganr calculos / * - + 
let resultado = 2 + 2 ;
console.log(resultado);

// para que hacer esto? las variables pueden cambiar el resultado y para no repetir lo mismo se crea una variable que tengan en comun un dato  

let uno = 1;
let dos = 2;
let igual = uno + dos;
console.log(igual);

//condicionaless booleanos 
let minumero = 7;

if (minumero == 7){
    console.log("si es")
} else {
    console.log("no es")
}

//para que diga true o false
minum = 4;

let resultadoPregunta = minum == 5;
console.log(resultadoPregunta);

let numeropin = 9;
if (numeropin == 9){
    console.log("si");
} else {
    console.log("no");
}

//bucles (bucles)
// while es una asignacion para darle un bucle que repita, ejemplo: contar desde 0 hasta el 4.

let contador = 0;
while(contador < 5) 
{
    console.log(contador);

    contador = contador + 1;
}

//declaras variable inicio
//limites del bucle final entre el inicio y el final 
//calculo de cada vuelta

for(let cont = 10; cont > 0; cont = cont - 1){
    console.log(cont);
}

// el contador se lo llama i y para sumarle o restarla es i++ o i--

for(let i = 0; i < 10; i++) {
    console.log(i);
}
*/
//FUNCIONES
/*es una maquinita que les puedo pasar ingredientes o argumentos, declaraciones para que calcule*/

/*

function saludar(nombre, edad){
    console.log("hola chicos mi nombre es " + nombre);
    console.log("y mi edad es " + edad);
}
saludar("fran", 29);

function multiplicar(num1, num2){
    let resultado = num1 * num2;
    return resultado;
}
let recibidor = multiplicar(2, 3);
console.log(recibidor);
*/
/* console.log(mulplicar(2, 3)); */

// ARREGLOS ARRAYS
/*
let miArreglo = ["David", "Fran", "Kevin", "Carla"];

for (let i = 0; i < 4; i++) {
    console.log("accediendo al indice " + i);
    let mostrar = miArreglo[i];
    console.log(mostrar);
}
*/
/*

let mostrar = miArreglo[2];
console.log(mostrar);

  //  for (let i = 0; i < 4; i++){}
*/

//OBJETOS 
let persona = {
    nombre : "fran",
    edad : 29,
    masculino : true,
}

let persona2 = {
    nombre : "julieta",
    edad : 18,
    masculino : false,
};
/*
console.log(persona);
console.log(persona2);
*/
let arregloDeObjetos = [persona, persona2];
console.log(arregloDeObjetos);