import 'reflect-metadata';

// class
function debug(classe: unknown) {
    console.log("Classes", "classe criada!", classe);
}

@debug
class PrimeiraClasse {
    constructor() {}
}

function log(constructor: any) {
    return class extends constructor {
        create_at: Date = new Date();
    }
}

@log
class SegundaClasse {}
const segundaClasse = new SegundaClasse();
console.log("Classes", segundaClasse);

// metodo

function decoratorMetodo(
    target: unknown, 
    propertykey: string,
    descriptor: PropertyDescriptor
) {
    descriptor.value = (...args: string[]) => {
        return args.map(item => item.toUpperCase());
    }
}

class TratarMensagem {
    @decoratorMetodo
    dizerMensagem(...mensagens: string[]) {
        return mensagens;
    }
}

const instancia = new TratarMensagem();
console.log("metodo", instancia.dizerMensagem('asdasd'));

// atributos

function decoratorAttr(
    target: unknown,
    nomePropriedade: string
) {
    const novoNome = `_${nomePropriedade}`;

    Object.defineProperty(target, nomePropriedade, {
        get() {
            return this[novoNome].toUpperCase();
        },
        set(novoValor) {
            this[novoNome] = novoValor;
        }
    });
}

class Animal {

    @decoratorAttr
    nome: string;

    constructor (nome: string) {
        this.nome = nome;
    }
}

const cachorro = new Animal("Pluto");
console.log("atributos" ,cachorro.nome);

// gatters e setters
function decoratorGetSet(valor: boolean) {
    return function(
        target: unknown,
        propertykey: string,
        descriptor: PropertyDescriptor
    ) {
        descriptor.enumerable = valor;
    }
}

class Login {
    constructor(
        private _usuario: string,
        private _senha: string
    ) {}

    @decoratorGetSet(true)
    get usuario() {
        return this._usuario;
    }

    @decoratorGetSet(false)
    get senha() {
        return this._senha;
    }
}

const login = new Login("user", "pass");

for(const key in login) {
    console.log("gatters e setters", key);
}

// parametros

function decoratorParametros(
    target: any,
    key: string,
    propertykey: number
) {
    console.log(target, key, propertykey)
    return Reflect.getMetadata("design:paramtypes", target, key);
}

class TratarParametros {
    metodo1(@decoratorParametros mensagens: string) { 
        console.log(mensagens)
    }
    metodo2(@decoratorParametros numero: number) {}
}

const a = TratarParametros

