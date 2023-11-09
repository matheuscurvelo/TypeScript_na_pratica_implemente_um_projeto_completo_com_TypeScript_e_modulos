import { TipoTransacao } from "./TipoTransacao.js";
let saldo = JSON.parse(localStorage.getItem("saldo")) || 0;
const transacoes = JSON.parse(localStorage.getItem("transacoes"), (key, value) => {
    if (key == 'data') {
        return new Date(value);
    }
    return value;
}) || [];
function debitar(valor) {
    if (valor <= 0) {
        throw new Error("O valor debitado deve ser maior que 0!");
    }
    if (valor > saldo) {
        throw new Error("Saldo insuficiente!");
    }
    saldo -= valor;
    localStorage.setItem("saldo", saldo.toString());
}
function depositar(valor) {
    if (valor <= 0) {
        throw new Error("O valor depositado deve ser maior que 0!");
    }
    saldo += valor;
    localStorage.setItem("saldo", saldo.toString());
}
const Conta = {
    getSaldo() {
        return saldo;
    },
    getDataAcesso() {
        return new Date();
    },
    getGruposTransacoes() {
        const gruposTransacoes = [];
        const listaTransacoes = JSON.parse(JSON.stringify(transacoes), (key, value) => {
            if (key == 'data') {
                return new Date(value);
            }
            return value;
        }); //versoes antes do es2022 nao suportam structuredClone()
        const transacoesOrdenadas = listaTransacoes.sort((t1, t2) => t2.data.getTime() - t1.data.getTime());
        let labelAtualGrupoTransacao = "";
        for (const transacao of transacoesOrdenadas) {
            let labelGrupoTransacao = transacao.data.toLocaleDateString("pt-br", { month: "long", year: "numeric" });
            if (labelAtualGrupoTransacao !== labelGrupoTransacao) {
                labelAtualGrupoTransacao = labelGrupoTransacao;
                gruposTransacoes.push({
                    label: labelGrupoTransacao,
                    transacoes: []
                });
            }
            gruposTransacoes[gruposTransacoes.length - 1].transacoes.push(transacao); //versoes antes do es2022 nao suportam at()
        }
        return gruposTransacoes;
    },
    agruparTransacoes() {
        const listaTransacoes = JSON.parse(JSON.stringify(transacoes));
        const resumo = {
            totalDepositos: 0,
            totalTransferencias: 0,
            totalPagamentosBoleto: 0,
        };
        for (const transacao of listaTransacoes) {
            if (transacao.tipoTransacao == TipoTransacao.DEPOSITO) {
                resumo.totalDepositos += transacao.valor;
            }
            else if (transacao.tipoTransacao == TipoTransacao.TRANSFERENCIA) {
                resumo.totalTransferencias += transacao.valor;
            }
            else if (transacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
                resumo.totalPagamentosBoleto += transacao.valor;
            }
        }
        return resumo;
    },
    registrarTransacao(novaTransacao) {
        if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
            depositar(novaTransacao.valor);
        }
        else if ([TipoTransacao.TRANSFERENCIA, TipoTransacao.PAGAMENTO_BOLETO].includes(novaTransacao.tipoTransacao)) {
            debitar(novaTransacao.valor);
            novaTransacao.valor *= -1;
        }
        else {
            throw new Error("Tipo de transação é inválido");
        }
        transacoes.push(novaTransacao);
        console.log(this.agruparTransacoes());
        localStorage.setItem("transacoes", JSON.stringify(transacoes));
    }
};
export default Conta;
