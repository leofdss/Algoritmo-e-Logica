import { BandoDeDados } from "./interfaces/ibanco-de-dados";

const conexaoBanco: BandoDeDados = BandoDeDados.factory({
    ip: BandoDeDados.LOCAL,
    usuario: "root",
    senha: "root",
    tipoBanco: BandoDeDados.TIPO_MYSQL
});

console.log(conexaoBanco);
console.log(BandoDeDados);

conexaoBanco.metodo();
