var compressWord = function (input) {
    var substring = [];
    var lastChar = input[0];
    console.log(lastChar);
    console.log();
    var charCount = 0;
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var char = input_1[_i];
        if (char !== lastChar) {
            substring.push(lastChar + charCount);
            console.log(substring);
            lastChar = char;
            console.log(lastChar);
            charCount = 0;
        }
        charCount++;
        console.log(charCount);
    }
    substring.push(lastChar + charCount);
    var result = "";
    for (var _a = 0, substring_1 = substring; _a < substring_1.length; _a++) {
        var key = substring_1[_a];
        result += key;
        console.log(result);
    }
    return result.length > input.length ? input : result;
};
