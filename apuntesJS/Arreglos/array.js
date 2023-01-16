
// en una variable guardamos un valor pero en un array o arreglo, guardamos varios valores en uno

let array = [manzana, banana, uva, naranja];
let cajon = [lapiz, hoja, libro, perfume, cortauñas];
        //     0     1      2       3       4

console.log(array[0]); //[1] [2] [3] [4] // me muestra manzana en consola


// DOS FORMAS DE LLAMAR A UN VALOR DE UN ARREGLO

// ___________________________
let arreglo1 = {
    propiedad : valor,
    propiedad : valor,
    propiedad : valor,
    propiedad : valor
}

document.write(arreglo1["propiedad"]); //muestra el "valor" en la consola

// ___________________________

let arreglo2 = ["valor1","valor2","valor3"];
             //    0        1       2   

document.write(arreglo2[0]); // muestra valor1 en consola

// ___________________________
// EJEMPLO 
// ___________________________

let pc1 = {
    nombre: "PC",
    procesador: "Intel Core i7",
    ram: "16GB",
    espacio: "1TB"
}

let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1[!"espacio"];

let frase = `el nombre de mi PC es : ${nombre}<br>
            el procesador es: ${procesador}<br>
            la memoria es de: ${ram}`;