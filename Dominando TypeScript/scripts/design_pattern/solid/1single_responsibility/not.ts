/// not

export interface IAtividade {
    title: string;
    date: Date;
}

export class Database {
    constructor(private _uri: string, private _tables: string[]) { }
    static connect(uri: string, tables: string[]): Database {
        return new Database(uri, tables);
    }
    atividades = {
        salvar: (value: IAtividade): void => {
            ///
        }
    }
}

export class Atividade {
    private _baseDados: Database;
    constructor(private _nome: string, private _prazo: Date) {
        this._baseDados = Database.connect("user:pass@database", ["atividades"]);
    }

    obterNome(): string {
        return this._nome + "(" + this._prazo + ")";
    }

    salvar(): void {
        this._baseDados.atividades.salvar({ title: this._nome, date: this._prazo });
    }
}

