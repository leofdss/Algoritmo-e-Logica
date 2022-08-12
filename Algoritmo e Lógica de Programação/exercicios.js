// Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
// função) e com ponto de exclamação "!" no final.

function cumprimentar(parametro) {
    return `Olá, ${parametro}!`;
}

console.log(cumprimentar("Leonardo"));

// Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
// Obs: considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e
// desconsidere também dias decorridos desde o último aniversário.

function converterIdadeEmAnosParaDias(years) {
    return years * 365;
}

console.log(converterIdadeEmAnosParaDias(25));

// Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
// funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
// X", em que X é o quanto o funcionário ganhou no mês.

function calcularSalario(horas, valor) {
    return `"Salário igual a R$ ${horas * valor}`;
}

console.log(calcularSalario(150, 40.5));

// Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma  string. Por
// exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.

function nomeDoMes(valor) {
    switch (valor) {
        case 1: return "janeiro";
        case 2: return "fevereiro";
        case 3: return "março";
        case 4: return "abril";
        case 5: return "maio";
        case 6: return "junho";
        case 7: return "julho";
        case 8: return "agosto";
        case 9: return "setembro";
        case 10: return "outubro";
        case 11: return "novembro";
        case 12: return "dezembro";
    }
}

console.log(nomeDoMes(1));

// Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. 

function maiorOuIgual(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 >= num2;
    }
    return false
}

console.log(maiorOuIgual(0, 0));
console.log(maiorOuIgual(0, "0"));
console.log(maiorOuIgual(5, 1));

// Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
// retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
// numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro 
// de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
// tipo ...".
// 

function inverso(value) {
    switch (typeof value) {
        case 'boolean': {
            return !value;
        }
        case 'number': {
            return value * -1;
        }
        default: {
            return "booleano ou números esperado, mas o parâmetro é do tipo string";
        }
    }

}

console.log(inverso(true));
console.log(inverso("6"));
console.log(inverso(-2000));
console.log(inverso("programação"));

// Crie uma função que receba três números como parâmetro (numero, minimo, maximo) e também um parâmetro booleano (inclusivo)
// e retorne se o parâmetro numero (o primeiro parâmetro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
// "entre" como inclusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro inclusivo não seja
// informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se numero é igual a minimo ou a
// maximo. 

function estaEntre(minimo, maximo, numero, inclusivo = false) {
    if (inclusivo) {
        return numero >= minimo && numero <= maximo;
    }
    return numero > minimo && numero < maximo;
}

console.log(estaEntre(10, 100, 50));
console.log(estaEntre(16, 100, 160));
console.log(estaEntre(3, 150, 3));
console.log(estaEntre(3, 150, 3, true));

// Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
// multiplicação deles. Porém, não utilize o operador de mutiplicação.

function multiplicar(num1, num2) {
    let result = 0;
    for (let i = 1; i <= num2; i++) {
        result += num1;
    }
    return result;
}

console.log(multiplicar(5, 5));
console.log(multiplicar(0, 7));

// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
// que o segundo será o número de vezes que haverá repetição. Um array será retornado.

function repetir(value, repeat) {
    const result = [];

    for (let i = 1; i <= repeat; i++) {
        result.push(value);
    }

    return result;
}

console.log(repetir("código", 2))
console.log(repetir(7, 3))

// Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
// quantidade especificada no parâmetro.

function simboloMais(repeat) {
    let result = '';

    for (let i = 1; i <= repeat; i++) {
        result += '*';
    }

    return result;
}

console.log(simboloMais(2));
console.log(simboloMais(4));

// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
// array:

function receberPrimeiroEUltimoElemento(array) {
    return [array[0], array[array.length - 1]]
}

console.log(receberPrimeiroEUltimoElemento([7, 14, "olá"]));
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]));

// Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos
// apenas modificando-o, mas, em essência, o objeto continua o mesmo, ou seja a sua referência de memória é a
// mesma.
// Num projeto que você está trabalhando, você foi designado a refatorar diversas funções para que façam
// cópias de objetos e manipulem os dados dessas cópias, com o intuito de evitar efeitos indesejáveis em
// algumas situações devido a referências a objetos. Abaixo, está a descrição de uma dessas funções.
// Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o
// nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a
// propriedade especificada no segundo parâmetro.

function removerPropriedade(obj, param) {
    const result = {}
    for (const key in obj) {
        if (key !== param) {
            result[key] = obj[key]
        }
    }
    return result;
}

console.log(removerPropriedade({ a: 1, b: 2 }, "a"));
console.log(removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
}, "descricao"))

const objeto = { a: 1, b: 2 };
console.log(Object.is(removerPropriedade(objeto, "descricao"), objeto))

// Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
// array recebido como parâmetro.

function filtrarNumeros(array) {
    const result = [];
    for (const item of array) {
        if (typeof item === 'number') {
            result.push(item);
        }
    }
    return result;
}

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]))
console.log(filtrarNumeros(["a", "c"]))

// Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
// elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
// exemplos abaixo para um melhor entendimento:

function objetoParaArray(obj) {
    const result = [];
    for (const key in obj) {
        result.push([key, obj[key]])
    }
    return result;
}

console.log(objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
}));

console.log(objetoParaArray({
    codigo: 11111,
    preco: 12000
}));

// Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
// pares e que também tenham índices pares. 

function receberSomenteOsParesDeIndicesPares(array) {
    const result = [];
    for (let i = 0; i <= array.length; i++) {
        if (i % 2 === 0 && array[i] % 2 === 0) {
            result.push(array[i]);
        }
    }
    return result;
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]));
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]));

// A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se os anos
// bissextos, que têm 366 dias em vez dos 365 presentes nos anos normais.
// Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser múltiplo de 100,
// exceto se for também múltiplo de 400.
// Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele
// é bissexto ou não

function checarAnoBissexto(ano) {
    if (ano % 4 === 0) {
        if (ano % 400 === 0) {
            return true;
        } else if (ano % 100 !== 0) {
            return true;
        }
    }
    return false;
}

console.log(checarAnoBissexto(2020));
console.log(checarAnoBissexto(2100));


// Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.

function somarNumeros(array) {
    let result = 0;
    for (const item of array) {
        result += item;
    }
    return result;
}

console.log(somarNumeros([10, 10, 10]));
console.log(somarNumeros([15, 15, 15, 15]));

// Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
// possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você
// está desenvolvendo no momento é a de somar o total das despesas.
// Crie uma função que receba um array de produtos e retorne o total das despesas.

function despesasTotais(array) {
    let result = 0;
    for(const item of array) {
        result += item.preco;
    }
    return result;
}

console.log(despesasTotais([
    { nome: "Jornal online", categoria: "Informação", preco: 89.99 },
    { nome: "Cinema", categoria: "Entretenimento", preco: 150 }
]));
console.log(despesasTotais([
    { nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99 },
    { nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90 }
]));

// Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
// pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo
// usuário.
// Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade
// indeterminada de números e retorne a média simples desses números.

function calcularMedia(array) {
    let sum = 0;
    for(const item of ) {

    }

}

console.log(calcularMedia([0, 10]));
console.log(calcularMedia([1, 2, 3, 4, 5]));
