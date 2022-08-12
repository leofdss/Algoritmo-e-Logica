import { IBancoDeDados } from "../classes/banco-de-dados";

export class BandoDeDados {
    static LOCAL = "localhost";
    static TIPO_MYSQL = "MySQL";
    static TIPO_SQLSERVER = "SQL Server";

    constructor(
        private ip: string,
        private usuario: string,
        private senha: string,
        private tipoBanco: string,
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