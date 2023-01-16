/*
Asi con 3 lineas 

let numero;
numero = 29;
alert(numero)

o Tambien con 2 lineas

let numero = 29;
alert(numero)


*/

/*No toma la segunda linea por ser constante en incluso te daria error en el navegador, las constantes se les da un valor solo una vez 
const numero = 2 ; 
numero = 9;
alert(numero)

Asi esta bien:

const numero = 2 ; 
alert(numero);


__________________________

let numero, numero2, numero3; //declare 3 variables
numero = 2;  // les doy un valor sino pongo valor el navegador te dira "undefined"
numero2 = 3;
numero3 = 5;

alert(numero); // y les doy una alerta a cada una
alert(numero2);
alert(numero3);

// otra forma 

let numero1 = 23;
let numero2 = 39;
let numero3 = 232; 



//Tambien aparte de dar un valor alas variables, podemos sumarlo dentro de la alerta, se puede utilizar los operadores matematicos
let numero = 5; 
let numero2 = 6;

alert(numero + numero2);


//Otra cosa es que si a numero2 le damos un string ?  en la alerta aparece "5pedro" eso se llama concatenar 

let numero = 5;
let numero2 = "pedro";

alert(numero + numero2);

// Ahora que pasa si le damos a * para multiplicar, aparece Nan, not a number no es un numero te dice que pongas un numero

let numero = 5;
let numero2 = "pedro";

alert(numero * numero2);

_______________________________________


// prompt es una funcion, parecida a ala alerta pero con un input para escribir 
    prompt("Decime tu nombre")


// Ahora si le agrego una variable entonces ahi es donde guardo esa informacion que el usuario puso su nombre para poder utilizarlo las veces que quiera con ese dato 


let nombre = prompt("decime tu nombre");

alert("hola " + nombre + " ! espero que te sirva mi contenido");


let numero = 10 ;

numero **= 5;

document.write(numero);


numero1 = 10;
numero2 = 5;
resultado = numero1 ** 2;
alert(resultado)


numero1 = 10;
numero2 = 5;
numero1++;
resultado = numero1;
alert(resultado)


saludo = "hola pedro!";
pregunta = "como estas?";

frase = saludo + pregunta 
document.write(frase);



frase = `<div>
<h1>Titulo</h1>
<p>Lorem amdkmsadkma</p>
</div>
`

document.write(frase);

*/

let numero = 12;
let numero1 = 32;

document.write(numero == numero1 ) // Igualdad: Pregunto si son iguales, me dio false porque 12 no es igual a 32

let numero2 = 32;
let numero3 = 23;

document.write(numero2 != numero3) //Inigualdad: Pregunto si son desiguales, me dio true porque son desiguales 

let numero4 = 23;
let numero5 = 43;

document.write(numero4 === numero5) // Identidad: Pregunto si son ESTRICTAMENTE iguales, porque el == no detecta los string
