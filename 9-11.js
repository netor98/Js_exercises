//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
console.group("Ejercicio 9");
const randomNumber = (min = undefined, max = undefined) => {

    if(!min) return console.warn("El mínimo está vacío")
    if(!max) return console.warn("El máximo está vacío")
    /*se hace la resta del número máx con el mín. 
    y el resultado se múltiplica por el número aleatorio*/

    //Y el tesultado se suma con el mínimo, para que entre en el rango.
    let num = Math.round(Math.random() * (max - min + 1)) + min;
    return console.log(num);
}
randomNumber(600,700);
console.groupEnd();



//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
console.group("Ejercicio 10");
const capicúa = num => {

    let reverse = num.toString().split("").reverse("").join("")
    reverse = parseInt(reverse,10);
    // console.log(reverse);
    // console.log(num);
    
    (num === reverse)
        ? console.log(true)
        : console.log(false);
}

capicúa(1997);
console.groupEnd();





//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
console.group("Ejercicio 11");
const factorial = (n) => {
    let res = n;
    for(let i = 1; i<n; i++){
        res *= i;
    }
    return console.log(res);    
}
factorial(3);
console.groupEnd();
