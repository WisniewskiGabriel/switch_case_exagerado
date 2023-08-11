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

function atribuirValorDefaultSeBebibaEstiverUndefined(){            //nome de função desnecessariamente grande...
    return "Chá";                                                   //tão desnecessaria quanto ela mesma 
}

function isEnvironmentBrowser(){                                    // checa se o ambiente onde esse código...
    return (typeof window !== 'undefined' &&                        // está rodando é um browser e...
            typeof document!== 'undefined');                        // retorna uma booleana
}

function isEnvironmentNode(){                                       // similar a função...
    return (typeof global !== 'undefined'                           //'i s E n v i r o n m e n t B r o w s e r',...
            && typeof process !== 'undefined'                       //mas checa se o ambiente é o Node
            && typeof require !== 'undefined')                      //e retorna uma booleana
}