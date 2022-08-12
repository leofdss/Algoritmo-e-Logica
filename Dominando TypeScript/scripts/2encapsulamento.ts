// public

class Veiculo {
    public nome: string;
    public cor: string;

    constructor(nome: string, cor: string) {
        this.nome = nome;
        this.cor = cor;
    }

    public tentarAbrirPorta(): boolean {
        return false;
    }
}

const veiculo = new Veiculo("Celta", "prata");

console.log(veiculo.tentarAbrirPorta());

// protected

class Domicilio {
    public cor: string;

    constructor(cor: string) {
        this.cor = cor;
    }

    protected atenderInterfone(mensagem: string): string {
        return mensagem;
    }
}

class Casa extends Domicilio {
    public entrarNaCasa(): string {
        return this.atenderInterfone('oi');
    }
}

const casa = new Casa("azul");
const domicilio = new Domicilio("azul");

// private

class Banco {
    private cofreQtd: number = 10000; // TS
    #cofreQtd2: number = 10000; // ECMAScript

    private debitarCofre(quantidade: number) {
        if(this.cofreQtd >= quantidade) {
            this.cofreQtd -= quantidade;
            return this.cofreQtd;
        } else {
            return "O cofre não possui a quantidade requisitada";
        }
    }

    protected sacarDoCaixa(quantidade: number): number | string {
        return this.debitarCofre(quantidade);
    }

    public sacarDoCaixaEletronico(quantidade: number): number | string {
        return this.sacarDoCaixa(quantidade);
    }
}

class Banco24h extends Banco {
    sacar(quantidade: number): number | string {
        return this.sacarDoCaixa(quantidade)
    }
}

const banco = new Banco24h();
console.log(banco.sacar(100));

// readonly - apenas atributos

class Usuario {
    readonly id: string = 'asdasdsad123';
    nome: string = "Joao";
    private senha = "aasdasdasd";
    readonly dataCadastro: Date = new Date("2021-01-01");
}
