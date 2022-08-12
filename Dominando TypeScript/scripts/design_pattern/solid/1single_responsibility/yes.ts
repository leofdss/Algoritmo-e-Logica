/// yes

export interface IAtividade {
    title: string;
    date: Date;
}

export class Database {
    constructor(private _uri: string, private _tables: string[]) { }
    static connect(uri: string, tables: string[]) {
        return new Database(uri, tables);
    }
    atividades = {
        salvar: (value: IAtividade): void => {
            ///
        }
    }
}

export class Atividade {
    constructor(private _nome: string, private _prazo: Date) { }

    obterNome(): string {
        return this._nome + "(" + this._prazo + ")";
    }
}

export class RepositorioAtividade {
    private _baseDados: Database;

    constructor() {
        this._baseDados = Database.connect("user:pass@database", ["atividades"]);
    }

    salvar(nome: string, prazo: Date): void {
        this._baseDados.atividades.salvar({ title: nome, date: prazo });
    }
}

