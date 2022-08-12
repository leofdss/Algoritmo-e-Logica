// not

export interface IDocumento {}
export interface IGrampo {}

export interface Impressora {
    copiarDocumento(): void;
    imprimirDocumento(documento: IDocumento): void;
    grampearDocumento(documento: IDocumento, grampo: IGrampo): void;
}

export class ImpressoraSimplesImpl implements Impressora {
    public copiarDocumento(): void {
        // ...
    }

    public imprimirDocumento(documento: IDocumento): void {
        // ...
    }

    public grampearDocumento(documento: IDocumento, grampo: IGrampo): void {
        // ...
    }
}
