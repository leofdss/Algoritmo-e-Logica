class Pessoa {
    nome: string;
    idade: number;
    altura: number;

    constructor(nome: string, idade: number, altura: number) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }

    toString(): string {
        return `A pessoa ${this.nome} tem ${this.idade} anos e mede ${this.altura} de altura`;
    }
}

const ronaldo = new Pessoa(
    "Ronaldo Braz",
    30,
    1.85
);

const marcos = new Pessoa(
    "Marcos",
    30,
    1.85
);

class Cliente extends Pessoa {
    constructor(nome: string, idade: number, altura: number, public empresa: string) {
        super(nome, idade, altura);
    }
}

const joao = new Cliente("João", 30, 2, "Empresa");

console.log(joao.empresa)
