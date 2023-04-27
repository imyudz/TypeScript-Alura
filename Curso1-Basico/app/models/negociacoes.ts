import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    };

    lista(): Array<Negociacao> {
        return [...this.negociacoes]; //retorna uma nova lista, mascarada com a lista oficial. Ou seja ela pode mudar a lista, mas não poderá mudar a lista original
    }
}
