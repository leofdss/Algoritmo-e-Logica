// not

export class CartaoCredito {
    private _codigo: string;
    private _expiracao: Date;
    protected custoMensal: number;

    constructor(codigo: string, expiracao: Date, custoMensal: number) {
        this._codigo = codigo;
        this._expiracao = expiracao;
        this.custoMensal = custoMensal;
    }

    obterCodigo(): string {
        return this._codigo;
    }

    obterExpiracao(): Date {
        return this._expiracao;
    }

    descontoMensal(): number {
        return this.custoMensal * 0.02;
    }

    descontoMensalGold(): number {
        return this.custoMensal * 0.05;
    }

    descontoMensalSilver(): number {
        return this.custoMensal * 0.03;
    }
}
