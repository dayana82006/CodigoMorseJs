const tablaMorse = {
    'A' : '.–',
    'B' : '-...',
    'C' : '-.-.',
    'D' : '-..',
    'E' : '.',
    'F' : '..-.',
    'G' : '--.',
    'H' : '....',
    'I' : '..',
    'J' : '.---',
    'K' : '-.-',
    'L' : '.-..',
    'M' : '--',
    'N' : '-.',
    'Ñ' : '--.--',
    'O' : '---',
    'P' : '.--.',
    'Q' : '--.-',
    'R' : '.-.',
    'S' : '...',
    'T' : '-',
    'U' : '..-',
    'V' : '...-',
    'W' : '.--',
    'X' : '-..-',
    'Y' : '-.--',
    'Z' : '--..',
    '0' :	'-----',
    '1' :	'.----',
    '2' :	'..---',
    '3' : '...--',
    '4' : '....-',
    '5' : '.....',
    '6' : '-....',
    '7' : '--...',
    '8' : '---..',
    '9' : '----.',
    ' ' : '/'
}

const option = prompt('Ingrese 1 para traducir a Morse o 2 Para traducir a texto nornal');

    if(option == 1){
        let messageN = prompt('Ingrese el mensaje que quiere traducir');
        let messageM = morseCode(messageN);
        console.log('El texto en morse es: ', messageM);
    } else if( option == 2){
        let messageM = prompt('Ingrese el codgio morse que quiere traducir');
        let messageN = normalText(messageM);
    }else{
        alert('Dato no válido')
    }

function morseCode(message){
    message = message.toUpperCase();
    let messageM = " ";
    for (let i = 0; i < message.length; i++){
        let caracter = message[i];
        if (tablaMorse[caracter]){
            messageM += tablaMorse[caracter]
            if(i < Text.length - 1){
                messageM = " ";
            }
        }  
    }
    return(messageM)
}

function normalCode(message){
    let tablaMorseInv = {}
    

}