const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let decoded_arr = [];
    let symbol = '';
    for (let i = 0; i < expr.length - 9; i++) {
        if (expr.slice(i,i+10)=='**********'){
            decoded_arr.push(' ');
        } else {
            symbol = '';
            let one_symbol = expr.slice(i,i+10);
            for (let j = 0; j < 5; j++) {
                switch (one_symbol.slice(j*2,j*2+2)) {
                    case '00': break;
                    case '10': symbol+='.';
                        break;
                    case '11': symbol+='-';
                        break;            
                    default:
                        break;
                }
            }
            decoded_arr.push(MORSE_TABLE[symbol]);
        }
        i+=9;               
    }
    return decoded_arr.join('');
}

module.exports = {
    decode
}