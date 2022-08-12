// yes

export class Documento {}
export class Grampo {}

export interface IImpressora {
    imprimirDocumento(documento: Documento): void;
}

export interface ICopiadora {
    copiarDocumento(): void;
}

export interface IGrampeador {
    grampearDocumento(documento: Documento, grampo: Grampo): void;
}

export class ImpressoraSimplesImpl implements IImpressora {
    public imprimirDocumento(documento: Documento): void {
        // ...
    }
}

export class ImpressoraMultifuncionalImpl implements IImpressora, ICopiadora {
    public imprimirDocumento(documento: Documento): void {
        // ...
    }

    public copiarDocumento(): void {
        // ...
    }
}

export class SuperImpressoraImpl implements IImpressora, ICopiadora, IGrampeador {
    public copiarDocumento(): void {
        // ...
    }

    public imprimirDocumento(documento: Documento): void {
        // ...
    }

    public grampearDocumento(documento: Documento, grampo: Grampo): void {
        // ...
    }
}