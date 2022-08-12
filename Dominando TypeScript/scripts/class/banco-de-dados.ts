import { IBancoDeDados } from "../interface/banco-de-dados";

export class BandoDeDados {
    static LOCAL = "localhost";
    static TIPO_MYSQL = "MySQL";
    static TIPO_SQLSERVER = "SQL Server";

    constructor(
        private _ip: string,
        private _usuario: string,
        private _senha: string,
        private _tipoBanco: string,
    ) { }

    static factory(parametros: IBancoDeDados): BandoDeDados {
        return new BandoDeDados(
            parametros.ip,
            parametros.usuario,
            parametros.senha,
            parametros.tipoBanco
        );
    }

    metodo() {
        console.log(BandoDeDados.LOCAL);
    }
}