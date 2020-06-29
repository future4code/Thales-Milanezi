var oneEdit = function (str, compareWord) {
    if (str.length > compareWord.length + 1 || str.length < compareWord.length - 1) {
        return false;
    }
    var charQTD = 0;
    for (var _i = 0, compareWord_1 = compareWord; _i < compareWord_1.length; _i++) {
        var char = compareWord_1[_i];
        if (compareWord.indexOf(char) !== -1) {
            charQTD++;
        }
    }
    return (charQTD <= compareWord.length + 1 && charQTD >= compareWord.length - 1);
};
oneEdit("suco", "uco");
oneEdit("suco", "Sujo");
oneEdit("suco", "Suuco");
//tentativa sem ajuda
// const addCharacter = (str: string): string => {
//   const result = str + str
//   return result 
// }
// const remCharacter = (str: string): string => {
//   const result = str.slice()
//   return
// }
// const subCharacter = (str: string): string => {
//   const result = str.replace(/str/gi, str)
//   return
// }
