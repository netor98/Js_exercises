//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
console.group("Ejercicio 5");
const invertirTexto = (texto = "") => {
    if (!texto) return console.warn("The string it's empty");

    let textoFinal = "";
    for (let i = texto.length; i>=1; i--){
        textoFinal += texto[i-1]
    }
    return console.log(textoFinal);
}
invertirTexto("texto");
console.groupEnd();




//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
console.group("Ejercicio 6");
const countWord = (sentence = "", word = "") => {

    if(!sentence) return console.warn("The sentence it's empty");
    if(!word) return console.warn("The word it's empty")

    let counter = 0;
    sentence = sentence.toLowerCase();
    sentence = sentence.split(" "); 
    

    for (values of sentence){
        if (values === word) 
            counter++;
    }
    return console.log(counter);
}
countWord("Hola mundo adiós mundo","mundo");
console.groupEnd();




//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
console.group("Ejercicio 3");
const palindrome = (word="") => {
    if(!word) return console.warn("The word it's empty")


    let reverseWord = "";
    for(let i = word.length; i>=1; i--){
        reverseWord += word[i-1];
    }
    (word === reverseWord)
        ? console.log(true)
        : console.log(false)
}
palindrome("hola");
console.groupEnd();



//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
console.group("Ejercicio 8");
const deletePatters = (text="", expR="") => {
    if(!text) return console.warn("The text it's empty");
    if(!expR) return console.warn("The pattern it's empty");

    return console.log(text.replaceAll(expR, ""));
} 
deletePatters("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
console.groupEnd();
