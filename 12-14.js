/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true */
const oddNumbers = (num = undefined) => {

    if (!num) return console.warn("Exist no number");
    if (typeof num != "number") return console.warn("Exist no number");

    /* todo tonto mi pa 
    let res = ((num % 1 === 0) && (num % num === 0) && (num % 2 != 0) && (num % 3 != 0) && (num % 5 != 0))
    ? console.log(`${num} it's prime`)
    : console.log(`${num} it's not prime`)
    */

    /* Este está chilo */
    //Creo una variable que es verdadera cuando el numero es divisible(no primo)
    let divisible = false;

    //Ciclo para hacer las divisiones del numero con los numeros que hay entre 1 y ese numero
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            divisible = true;
            break;
        }
    }

    (divisible)
    ? console.log(`${num} it's not prime`)
    : console.log(`${num} it's prime`)
}
oddNumbers(63);



/* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar */
const evenOrOdd = (num = undefined) => {
    if (!num) return console.warn("Exist no number");
    if (typeof num != "number") return console.warn("Exist no number");

    let res = (num % 2 === 0)
    ? console.log(`${num} it's even`)
    : console.log(`${num} it's odd`)
}
evenOrOdd(23);


/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F */
const converter = (cantidad = undefined,option = undefined, ) => {

    if (!cantidad) return console.warn("Exist no number");
    if (typeof cantidad != "number") return console.warn("Exist no number");
    if (typeof option !== "string") return console.warn("Datos no válidos");
    
    (option.toLowerCase() === "c") 
    ? console.log(`${cantidad}°C = ${cantidad * 1.8 + 32}°F`)
    : (option.toLowerCase() === "f")
        ? console.log(`${cantidad}°F = ${(cantidad - 32) * .5556}°C`)
        : console.warn("No es un tipo correcto de grados (tonto)") 
}
converter(12,"f");
