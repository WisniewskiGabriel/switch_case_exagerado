const readlineSync = require('readline-sync');                              
let bebida = "";

bebida = pegarValor();
console.log(bebida)

function pegarValor(){                                                      // função handler para chamada do... 
    let str_bebida = "";                                                    // tipo de input correto
                                                                            // - - - - - - - - - - - - - - - - - - - - - 
    switch(true){                                                           // esse switch case é um pouco...
        case isEnvironmentNode():                                           // atípico, porque usa uma assinatura...
            str_bebida = pegarValorPorReadline();                           // true, sendo assim, qualquer case onde...
            break;                                                          // valor função que retorno true será...
        case isEnvironmentBrowser():                                        //  executada imediatamente
            str_bebida = pegarValorPorBrowserPrompt();                      // - - - - - - - - - - - - - - - - - - - - - 
            break;
        default:
            console.log("De algum modo bizarro esta "+
            "execução não está no Node "+
            "e nem no Browser...")
            str_bebida = atribuirValorDefaultSeBebibaEstiverUndefined();
            console.log("Sendo assim, o programa está"+
            " hard coded para selecionar 'cha'");
        }

    return str_bebida;
}

function pegarValorPorBrowserPrompt(){                                      // pegar input em um browser qualquer..
    let str_bebida = window.prompt("Qual bebida voce quer?");               // usando window.prompt
    return bebida;                                                          // - - - - - - - - - - - - - - - - - - - - - 
}

function pegarValorPorReadline(){                                           // pegar input por readline-sync... 
    let str_bebida = readlineSync.question('Qual bebida voce quer?\n');     // executando em Node.js no terminal
    return str_bebida;                                                      // - - - - - - - - - - - - - - - - - - - - - 
}

function atribuirValorDefaultSeBebibaEstiverUndefined(){                    // nome de função desnecessariamente grande...
return "Cha";                                                               // tão desnecessaria quanto ela mesma 
}                                                                           // - - - - - - - - - - - - - - - - - - - - - 

function isEnvironmentBrowser(){                                            // checa se o ambiente onde esse código...
    return (typeof window !== 'undefined' &&                                // está rodando é um browser e...
            typeof document!== 'undefined');                                // retorna uma booleana
}                                                                           // - - - - - - - - - - - - - - - - - - - - - 

function isEnvironmentNode(){                                               // similar a função...
    return (typeof global !== 'undefined'                                   // 'i s E n v i r o n m e n t B r o w s e r',...
            && typeof process !== 'undefined'                               // mas checa se o ambiente é o Node...
            && typeof require !== 'undefined')                              // e retorna uma booleana
}                                                                           // - - - - - - - - - - - - - - - - - - - - -    