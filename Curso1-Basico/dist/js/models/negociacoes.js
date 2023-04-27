export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    ;
    lista() {
        return [...this.negociacoes]; //retorna uma nova lista, mascarada com a lista oficial. Ou seja ela pode mudar a lista, mas não poderá mudar a lista original
    }
}
