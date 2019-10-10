const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

const expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";
decode(expr)

function decode(expr) {
    let result = "";
    for (var i = 0; i < expr.length; i += 10) {
        let code = expr.substr(i, 10);
        if (code == "**********") {
            result += " ";
        } else {
            result += MORSE_TABLE[getMorse(getSymbolCode(code))];
        }
    }
    return result;
}

function getSymbolCode(code) {
    var symbolCode = '';
    for (var i = 0; i < code.length; i++) {
        if (code.charAt(i) == "1") {
            symbolCode += code.substr(i);
            break;
        }
    }
    return symbolCode;
}

function getMorse(symbolCode) {
    let morse = "";
    for (var i = 0; i < symbolCode.length; i += 2) {
        let codeM = symbolCode.substr(i, 2);
        if (codeM == "10") {
            morse += ".";
        } else {
            if (codeM == "11") {
                morse += "-";
            }
        }
    }
    return morse;
}

module.exports = {
    decode
}