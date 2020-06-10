function upperCaseAndLowerCase2(word1, word2) {
    if (word1.toUpperCase() == word2.toUpperCase() ||
        word1.toLowerCase() == word2.toLowerCase()) {
        return true;
    }
    else {
        return false;
    }
}
console.log(upperCaseAndLowerCase2("escola", "EScola"));
