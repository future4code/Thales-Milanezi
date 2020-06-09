function reciveStringReturnArray(text) {
    var myArr = [];
    for (var i = 0; i < text.length; i++) {
        myArr.push(text[i]);
    }
    return myArr;
}
console.log(reciveStringReturnArray("Geleia"));
