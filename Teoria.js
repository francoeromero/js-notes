/*
0) Introduccion - Que es Javascript?

-Lenguaje de programacion:

(Es una herramienta que nos permite darle instrucciones a un ordenado a traves de codigos, codigo que esta estructurado para que nosotros podamos escribirlo siguiendo una logica, para que pueda cumplir una funcion que nosotros queremos)

-Interpretado sda

(Javascript es un lenguaje interpretadol, que quiere decir que todo el codigo que escribimos no tiene que ser pasado por un compilador sino que va directamente ejecutarse en el navegador, que tiene una herrramienta llamada interprete que lo hace esa herramienta lo ejecuta en tiempo real )

-Orientado a objetos

(Significa un lenguaje en donde su estructura abarca todas las caracteristicas que tiene la programacion orientada a objetos, todo javascript es un lenguaje orientado a objetos )

-Imperativo

(Jaaavascript es un lenguaje imperativo porque todas las instrucciones van de linea en linea  hay otros lenguajes que se ejecutan cuando todo el conjunto este listo, encambio js se ejecuta por cada linea)


-Case Sensitive (Upper and Lowe Case)

(Es sensible a mayusculas y minusculas)

-Basado en prototipos / instancias / classless
(nos basamos en un prototipo que ya viene creado de javascript)


-Tipado debil

(el valor de las variables pueden cambiar a lo largo del tiempo, es mas flexible porque la variable la podemos ir cambiando)

-Lenguaje dinamico

(La variable no se ajusta al dato sino el dato se ajusta a la variable)

-ECMASCRIPT (5.1 y 6.7, 8, Next)

(contituida por esta version . )

________________________________________________________________________________________

1) Editor de texto

-Personalizar Sublime Text 3 
-Otras opciones

2) Para que se usa? 

-Dinamismo de los sitios web
-Servidor en NodeJS

*/

/*
VARIABLE

Una variable es un espacio que guardamos en memoria. Osea un ejemplo simple es la de un vaso o recipiente, es el contenedor de lo que este dentro de el. La variable es el contenedor y lo que este dentro es el dato. 

recipiente = "papel"

contenedor = "contenido"


_____________________________________________________________________________________________

3) Formas de Enlazar Javascript 

- En linea en un elemento html 
- Como contenido en la etiqueta <script> en html
- Como contenido en un archivo de formato .js (RECOMENDADO)
- Con un require

_______________________________________________________________________________________________

4) Variables 

- Concepto // El vaso con un papel adentro, el vaso el contenedor es la variable y el papel el dato
- Ejemplo  // 

            recipiente = "barbijo"

            alert(recipiente) // 4. si colocamos alert, va a decir el navegador lo que esta entre comillas que es la cadena

- Tipos de Datos: String, Number, Boolean (Existen 3 tipos de datos ) 
    //Un string es una cadena, que asi se le llaman a un texto, conjunto de letras, que ocupan caracteres

            string = "Cadena de texto"

    //Number es un numero o conjuntos de numeros, VA SIN COMILLAS sino se lo considera string

            number = 19 

    //Booleano es los que trabajan con 0 y 1, o como tambien verdadero o falso  / true or false
    
            booleano = false

    //Cuando nosotros declaramos una variable tenemos 3 formas var let y const. 
            Las diferencias es que let tiene un alcance local y var un alcance global 
            
                    var nombre = "franco"   let nombre = "franco"
        
            
            y const es una constante, las variables const, no cambian su valor, sera fijo por mas que pongas otro string abajo, no se cambiara a menos que lo cambies de la variable const, se da una sola vez el valor

                    const nombre = "franco"
                        alert(nombre);

            

- Casos especiales de Datos: Undefined, Null, Nan; 

        -Null: 
                let numero = null; // poner null es decir que el valor va a ser nulo


- Scope ( Basicamente es el alcance de las variables, var alcance global, let alcance local, const alcance constante)

- Hoisting

            (Tiene que ver con la creacion y la ejecucion )


- Tipos de variables (let, Var, y Const)
        estos tipos de variables ya se hablo anteriormente solo es nombrarlo para que quede


- Crear multiples variables (separandolas con coma) -> Let nombre1 = "jorge", nombre2 = ""

    let numero, numero2, numero3; //declare 3 variables
    numero = 2;
    numero2 = 3;
    numero3 = 5;

    alert(numero);
    alert(numero2);
    alert(numero3);

____________________________________________________________________________________________

5) Operadores en Javascript

    -Operadores de Asignacion
            Asigna un valor al operando de la izquierda basado en el valor de la derecha, osea valor = valor lo estamos asignando. numero = 10; 
             
                    Asignacion x = y 
                            adicion --------------------------------x += y           
                            sustraccion-----------------------------x -= y
                            multiplicacion -------------------------x *= y
                            division--------------------------------x /= y
                            resto-----------------------------------x %= y
                            exponenciacion--------------------------x **= y  (elevado al .. )

                            operaciones avanzadas: 

                            desplazamiento a la izquierda-----------x <<= y
                            desplazamiento a la derecha-------------x >>= y
                            AND-------------------------------------x &= y
                            XOR-------------------------------------x ^= y
                            OR--------------------------------------x 

                            Ejemplo 

                            numero = 10;
                            numero += 5; // estas agregando 5 al 10 o numero + 5

                            let numero = 10;
                            numero += 5; 
                            documento.write(numero) 


    
    -Operadores Aritmeticos
            Toman valores numericos como sus operandos y retornan un valor numerico unico 

            adicion (+)

                ej:
                        numero1 = 10; 
                        numero2 = 5;
                        resultado = numero1 + numero2; 
                        alert(resultado)


            Decremento(--)

                ej:
                        numero1 = 10;
                        numero2 = 5;
                        numero1--; // aca lo que hace es restarle 1 
                        resultado = numero1
                        alert(resultado)

            Division(/)
                ej:
                        numero1 = 10;
                        numero2 = 5;
                        resultado = numero1 / numero2;
                        alert(resultado)

            Exponenciacion(**)

                ej:
                        numero1 = 10;
                        numero2 = 5;
                        resultado = numero1 ** 2;
                        alert(resultado)

            Incremento(++)

                 ej:
                        numero1 = 10;
                        numero2 = 5;
                        numero1++;
                        resultado = numero1;
                        alert(resultado)

            Multiplicacion(*)


_______________________________________________________________________________________

6) Concatenacion 
         

    -Definicion y ejemplo       
    (Basicamente la concatenacion es unir cadenas o strings )

    
    -Con el signo + 


        ejemplo:

    saludo = "hola pedro!";
    pregunta = "como estas?";

    frase = saludo + pregunta   //aca estoy concatenando, estoy uniendo dos cadenas hola pedro y como estas
    document.write(frase);

    -Para numeros forzamos string ("" + 9 + 4)
     (Otra forma es sumar numeros sin que se sumen )
        Cuando detecta un texto como "" que es un string, lo convierte todo en una cadena de texto 

        numero1 = 5;
        numero2 = 8;

        frase = "" + numero1 + numero2 //Cuando detecta un texto como "" que es un string, lo convierte todo en una cadena de texto

        document.write(frase);

        A esto se lo denomina "tipado dinamico" es muy importante la concatenacion porque se utiliza mucho


    -Con concat
    (Usar concat para los strings, que este entre comillas)

    numero1 = "4";
    numero2 = 8;

    frase = numero1.concat(numero2)
    document.write(frase)

    -Con backtiks y la variable entre ${}
    (el backticks es esto: `` ,  son comillas invertidas para usar html pero tambien se puede concatenar de otra forma )

            ejemplo:

        nombre = "fran";
        frase = "soy" + nombre + "y estoy caminando";
                        o
        frase = `soy ${nombre} y estoy caminando`
                        o
        frase = `<div>
        <h1>Titulo</h1>
        <p>Lorem amdkmsadkma</p>
        </div>
        `
        document.write(frase);  //Entonces tenemos los backticks `` las comillas "" y las comillas simples ´´  se puede jugar con estos 3, "hola mi nombre es ´fran´ "
__________________________________________________________________________________________________

8) Operadores (intermedios)

*operadores de comparacion: comparan dos expresiones y devuelven un valor BOOLEAN (booleanos que serias true o false)
        ejemplo:
        let numero = 23;
        let numero2 = 13;

        document.write(numero == numero2) // estoy preguntando si es igual, y me respondera como true o false


let numero = 12;
let numero1 = 32;

document.write(numero == numero1 ) // Igualdad: Pregunto si son iguales, me dio false porque 12 no es igual a 32

let numero2 = 32;
let numero3 = 23;

document.write(numero2 != numero3) //Inigualdad: Pregunto si son desiguales, me dio true porque son desiguales 

let numero4 = 23;
let numero5 = 43;

document.write(numero4 === numero5) // Identidad: Pregunto si son ESTRICTAMENTE iguales, porque el == no detecta los string






        - operadores logicos
        - operadores de comparacion 


*/





