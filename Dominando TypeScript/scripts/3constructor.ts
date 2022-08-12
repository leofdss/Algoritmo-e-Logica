class Pedido {
    constructor(
        public produto: string,
        public valorTotal: number,
        public previsaoEntrega: Date
    ) { }
}