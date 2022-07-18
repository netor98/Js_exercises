//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
console.group("Ejercicio 1");
function sizeText(text){
    if(typeof text !== "string"){
        console.error("Please enter a string value");
        return `${text} it is not a string type`;
    } else{
        return(`Your text have ${text.length} characters`);
    }
}
console.log(sizeText("faef"));
console.groupEnd();




//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
console.group("Ejercicio 2")
function cutText(text, totalSize){
    try {
        if((typeof text !== "string") || (typeof totalSize !== "number")){
            throw new Error("The arguments do not correspond to the type of expected values");
        }
    } catch (error){
        console.error(error);
        return;
    }
    let newText = text.slice(0, totalSize);
    return `Old text: ${text} \nNew text: ${newText}`;
}
console.log(cutText("Hola Mundo",4));
console.groupEnd();



//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
console.group("Ejercicio 3")
function separateWords(sentence, separator){
    let words = sentence.split(separator);
    return words;
}
console.log(separateWords("1213,234324,34534", ","));
console.groupEnd();





//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
console.group("Ejercicio 4");
function repeatText(text, iteration){
    try {
        if((typeof text !== "string") || (typeof iteration !== "number")){
            throw new Error("The arguments do not correspond to the type of expected values");
        }
    } catch (error){
        console.error(error);
        return;
    }

    let newText = "";
    for(let i = 1; i<=iteration; i++){
         newText += text;
         newText += " ";
    }
    return newText;
}

console.log(repeatText("Me repito cuatro veces.", 4));
console.groupEnd();