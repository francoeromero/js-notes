
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