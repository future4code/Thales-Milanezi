function reciveStringReturnObject(text) {
    var allCaracters = text.length;
    var firstCaracter = text[0].length;
    var lastCaracter = text[text.length - 1];
    return { allCaracters: allCaracters, firstCaracter: firstCaracter, lastCaracter: lastCaracter };
}
console.log(reciveStringReturnObject("thales"));
