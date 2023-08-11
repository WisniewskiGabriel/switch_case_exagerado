let bebida = "";
const str_frase_bebida = "Qual bebida você quer?";

function pegarValorPorBrowserPrompt(){                              //pegar input em um browser qualquer..
    let str_bebida = window.prompt(str_frase_bebida);               //usando window.prompt
    return bebida;
}

function pegarValorPorReadline(){                                   //pegar input por readline-sync... 
    const readlineSync = require('readline-sync');                  //executando em Node.js
    let str_bebida = readlineSync.question(str_frase_bebida);
}