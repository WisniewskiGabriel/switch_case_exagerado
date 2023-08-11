const readlineSync = require('readline-sync');                              
let bebida = "";
let valor = 0.00;

displayCardapio();
informarValorDeBebida();

function inputBebida(){                                                      // função handler para chamada do... 
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
            console.log("de algum modo bizarro esta "+
            "execucao nao esta no node "+
            "e nem no browser...")
            str_bebida = atribuirValorDefaultSeBebibaEstiverUndefined();
            console.log("sendo assim, o programa esta"+
            " hard coded para selecionar 'cha'");
        }

    return str_bebida;
}

function pegarValorPorBrowserPrompt(){                                      // pegar input em um browser qualquer...
    let str_bebida = window.prompt("Qual bebida voce quer?");               // usando window.prompt
    return bebida;                                                          // - - - - - - - - - - - - - - - - - - - - - 
}

function pegarValorPorReadline(){                                           // pegar input por readline-sync... 
    let str_bebida = readlineSync.question('Qual bebida voce quer?\n');     // executando em Node.js no terminal
    return str_bebida;                                                      // - - - - - - - - - - - - - - - - - - - - - 
}

function atribuirValorDefaultSeBebibaEstiverUndefined(){                    // nome de função desnecessariamente grande...
return "cha";                                                               // tão desnecessaria quanto ela mesma 
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

function determinarValor(str_bebida){                                       // sem nenhum truque, só o switch mesmo, que...
                                                                            // era a real demanda dessa atividade kkkkkk
    let valor = 0.00;                                                       // - - - - - - - - - - - - - - - - - - - - -

    switch (str_bebida){
        case 'cha':
            valor = 2.50
            break;
        case 'cafe':
            valor = 3.50
            break;
        case 'leite':
            valor = 4.50
            break;
        case '':
            console.log("nao deu pra ouvir o que voce disse"+"\n");              // o default faz uma chamada recursiva para usar...
            bebida = atribuirValorDefaultSeBebibaEstiverUndefined()         // o valor de escape no caso de falha de input do...
            console.log("em vez disso, serviremos "+bebida+"\n");                // usuário
            valor = determinarValor(bebida);                                // - - - - - - - - - - - - - - - - - - - - -
            break;
        default:
            console.log("aqui nao comercializamos '"+bebida+"'\n");         // o default faz uma chamada recursiva para usar...
            bebida = atribuirValorDefaultSeBebibaEstiverUndefined()         // o valor de escape no caso de falha de input do...
            console.log("em vez disso, serviremos "+bebida+"\n");           // usuário
            valor = determinarValor(bebida);                                // - - - - - - - - - - - - - - - - - - - - -
            break;
    }

    return valor;
}

function informarValorDeBebida(){                                           // encapsulamento das funções acima
    bebida = inputBebida();
    valor = determinarValor(bebida);
    console.log("O valor da bebida "+bebida+" é R$"+valor.toFixed(2));
}                                                                           // - - - - - - - - - - - - - - - - - - - - -

function displayCardapio(){
    console.log("opcoes");
    console.log("cha: R$ 2.50");
    console.log("cafe: R$ 3.50");
    console.log("leite: R$ 4.50");
    console.log("e por favor, apenas caracteres ASCII"+
                " no terminal taokei\n");
}