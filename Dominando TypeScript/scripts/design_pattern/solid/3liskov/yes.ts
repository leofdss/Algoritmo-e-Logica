// yes

export abstract class Pessoa {
    abstract dizerSaudacao(): string;
}

export class Brasileiro extends Pessoa {
    dizerSaudacao(): string {
        return "bom dia!";
    }
}

export class Americano extends Pessoa {
    dizerSaudacao(): string {
        return "Good morning!";
    }
}

export class Italiano extends Pessoa {
    dizerSaudacao(): string {
        return "Buongiorno!";
    }
}
