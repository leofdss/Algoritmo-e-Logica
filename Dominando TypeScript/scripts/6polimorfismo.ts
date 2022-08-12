class Empresa {
    prestarServico(): string {
        return "Empresa prestando serviço";
    }
}

class Padaria extends Empresa {
    prestarServico(): string {
        return "Vendendo pão";
    }
}

class Mercearia extends Empresa {
    prestarServico(): string {
        return "Vendendo alimentos e bebidas";
    }
}

let koko: Empresa = new Empresa;
let koko1: Empresa = new Padaria;
let koko2: Empresa = new Mercearia;

console.log(koko.prestarServico());
console.log(koko1.prestarServico());
console.log(koko2.prestarServico());