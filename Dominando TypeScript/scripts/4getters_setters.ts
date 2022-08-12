class Permissao {
    constructor(
        private _nome: string,
        private _nivel: number
    ) {}

    get nome(): string {
        return this._nome.toUpperCase();
    }

    set nome(nome: string) {
        if(nome.length < 5) {
            throw new Error("min 5")
        }
        this._nome = nome;
    }
}


let permissao = new Permissao('nome', 5);
permissao = new Permissao('nome2', 5);

console.log(permissao.nome)