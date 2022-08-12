// This can live anywhere in your codebase:
function applyMixins(derivedCtor: any, constructors: any[]) {
    constructors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            Object.defineProperty(
                derivedCtor.prototype,
                name,
                Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                Object.create(null)
            );
        });
    });
}

class ProdutoFinal {
    vender(quantidade: number) {
        return `Foram vendidos ${quantidade} itens deste produto`;
    }

    comprar(quantidade: number) {
        return `Foram comprados ${quantidade} itens deste produto`;
    }
}

class Movel {
    sentar() {
        return "Você sentou do móvel";
    }

    empurrar(metros: number) {
        return `O móvel foi empurrado ${metros} metros.`;
    }
}

class Sofa {
    constructor(public nome: string) {}
}

interface Sofa extends ProdutoFinal, Movel { }
applyMixins(Sofa, [ProdutoFinal, Movel]);

const produto = new Sofa("Meu sofá");
const a = produto.vender(1);
console.log(a);