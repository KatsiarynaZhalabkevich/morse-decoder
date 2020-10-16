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

function decode(expr) {
    let words = expr.match(/.{1,10}/g);
    let symbols ='';
    for (let i = 0; i < words.length; i++) {
        if (words[i].indexOf('1') !== -1) {
           words[i]= words[i].replace(/10/g, '.')
                .replace(/11/g, '-')
                .replace(/0/g, '');
        }
        if(words[i].indexOf('*')!==-1){
            words[i]=' ';
        }
        if(MORSE_TABLE[words[i]]!==undefined){
            symbols+=MORSE_TABLE[words[i]];
        }else{
            symbols+=words[i];
        }

    }
    return symbols;




}

module.exports = {
    decode
}