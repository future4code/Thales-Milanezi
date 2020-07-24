function identifyStrings(word) {
    for (var i = 0; i < word.length; i++) {
        var wordTypeNumber = parseInt(word);
        if (wordTypeNumber) {
            return true;
        }
        else {
            return false;
        }
    }
}
console.log(identifyStrings("Cogumelo"));
