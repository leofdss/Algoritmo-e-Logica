// not

export class Pessoa {
    dizerSaudacao(): string {
        return "bom dia!";
    };
}

export class Brasileiro extends Pessoa {
    dizerSaudacao(): string {
        console.log("bom dia!");
        return "done";
    }
}
