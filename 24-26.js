//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
const ordenados = (arreglo = undefined) => {
    if(!arreglo) return console.warn("Datos no válidos");
    if(!(Array.isArray(arreglo))) return console.warn("Datos no válidos");
    if(arreglo.length === 0 ) return console.warn("Datos no válidos");

    for (const iterator of arreglo) {
        if(typeof iterator !== "number") return console.error("Solo debes ingresar numeros");
    }

   
    return console.log({
        arreglo,
        asc : arreglo.map(el => el).sort((a,b) => a-b),
        desc : arreglo.map(el => el).sort((a,b) => a-b) .reverse()
    });
}
ordenados([2,5,1,4,39,422,1,4]);


//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
const repetidos = (arreglo = undefined) => {
    if(!arreglo) return console.warn("Datos no válidos");
    if(!(Array.isArray(arreglo))) return console.warn("Datos no válidos");
    if(arreglo.length === 0 ) return console.warn("Datos no válidos");

    const noRepetidos = arreglo.filter((item,index) => {
        return arreglo.indexOf(item) === index;
    });
    return console.log(noRepetidos);
    
}
repetidos(["x", 10, "x", 2, "10", 10, true, true,10]);







//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
const promedio = (arreglo = undefined) => {
    if(!arreglo) return console.warn("Datos no válidos");
    if(!(Array.isArray(arreglo))) return console.warn("Datos no válidos");
    if(arreglo.length === 0 ) return console.warn("Datos no válidos");

    for (const iterator of arreglo) {
        if(typeof iterator !== "number") return console.error("Solo debes ingresar numeros");
    }

    let prom = 0;

    arreglo.forEach(element => {
        prom += element
    });

    prom = (prom / arreglo.length).toFixed(2);
    return console.log({
        arreglo,
        prom
    })
}
promedio([10,2,4,12,4,6,3]);