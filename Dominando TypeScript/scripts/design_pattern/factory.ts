export interface IBancoDeDados {
    ip: string;
    usuario: string;
    senha: string;
    tipoBanco: string;
}

class BandoDeDados {
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
}

const conexaoBanco: BandoDeDados = BandoDeDados.factory({
  ip: "ip",
  usuario: "root",
  senha: "root",
  tipoBanco: "tipoBanco"
});