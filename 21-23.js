//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
const elevarCuadrado = (arreglo = undefined) => {

    if(!arreglo) return console.warn("Datos no válidos");
    if(!(Array.isArray(arreglo))) return console.warn("Datos no válidos");

    for (const iterator of arreglo) {
       if(typeof iterator !== "number") return console.error("Solo debes ingresar numeros");
    }
   

    arrayElevado = [];
    arreglo.forEach(element => {
        arrayElevado.push(element * element);
    });

    return console.log(`Arreglo normal: ${arreglo}\nArreglo al cuadrado ${arrayElevado}`);
}
elevarCuadrado([1,4,8]);



//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
const maxAndMin = (arreglo=undefined) => {
    //Validaciones
    if(!arreglo) return console.warn("Datos no válidos");
    if(!(Array.isArray(arreglo))) return console.warn("Datos no válidos");

    for (const iterator of arreglo) {
        if(typeof iterator !== "number") return console.error("Solo debes ingresar numeros");
     }

    let max = 0,
        min = 1000;

    arreglo.forEach(element => {
        if(element > max) max = element;
        if(element < min) min = element;
    })

    return console.log({
        max,
        min
    });
}
maxAndMin([1,6,12,32,2,"a"]);





//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
const pairOrOdds = (arreglo = undefined) => {

    if(!arreglo) return console.warn("Datos no válidos");
    if(!(Array.isArray(arreglo))) return console.warn("Datos no válidos");

    for (const iterator of arreglo) {
        if(typeof iterator !== "number") return console.error("Solo debes ingresar numeros");
     }
    

  
  let  arregloPares = [],
    arregloImpares = []
  

    arreglo.forEach(element => {
        if (element % 2 === 0) {
            arregloPares.push(element);
        } else {
            arregloImpares.push(element);
        }
    })

    return console.log({
        arregloPares,
        arregloImpares
    });
}

pairOrOdds([2,4,6,4,1,1,6,7])