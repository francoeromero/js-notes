/*
3 chicos de 26 años entran a una heladeria a comprar un helado, los precios no estan con su respectivo helado, 
ellos quieren comprar el helado mas caro. 

Cada uno de los 3 tiene distinta cantidad de dinero.

3 chicos: 
Roberto tiene 1.5 usd
Pedro tiene 1.7 usd
Cofla tiene 3 usd

precios de los helados:
        Palito de helado de agua: 0.6 usd
        Palito de helado de crema: 1 usd
        Bombon helado marca heladix: 1.6 usd
        Bombon helado marca heladovich: 1.7 usd
        Bombon helado marca helardo: 1.8 usd
        Potecito de helado con confites: 2.9 usd
        Pote de 1/4 kg -> 2.9 usd
        

- Problema A  : 
            - Ingrese el monto y mostrar el mas caro
            - Si hay 2 o mas mostrar ambos
            - Indicar el vuelto

*/

// let roberto = 1.5;
// let pedro = 1.7;
// let cofla = 3;
// let monto;
// let helado;

// let palitoAgua = 0.6;
// let palitoCrema = 1;
// let bombonHeladix = 1.6;
// let bombonHeladovich = 1.7;
// let bombonHelardo = 1.8;
// let poteConfites = 2.9;
// let pote = 2.9;


// 0.6      1       1.6     1.7     1.8     2.9    

let monto = parseInt(prompt("Ingrese su monto de dinero Cofla: "));

if (monto >= 0.6 && monto <= 1){
    alert("Comprate el Palito de Agua o Crema" + " y te sobra " + (monto - 0.6));
}
else if (monto > 1 && monto <= 1.7){
    alert("Comprate el Heladix o el Heladovich" + " y te sobra " + (monto - 1));
}
else if (monto >= 1.8 ){
    alert("Comprate el Helardo o Confites o el Pote" + " y te sobra " + (monto - 2.9));
}
else {
    alert("Lo siento no te alcanza para ningun helado");
}




/*

- Problema B : 
            -Si le alcanza 1, lo compra
            -Si le alcanza 2, compra dos
            -Si le alcanza 3, regala el vuelto 
            -Debe mostrar que compró y el vuelto
*/



/*

- Problema C : 
            -Si miente le da una descarga electrica
            -Si no miente no hacer nada
            -Si el aparato no se decide, aclarar que la pregunta debe ser mas clara


*/