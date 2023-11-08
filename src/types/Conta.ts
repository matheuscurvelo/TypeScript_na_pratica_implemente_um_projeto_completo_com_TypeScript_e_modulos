import { Transacao } from "./Transacao.js";
import { TipoTransacao } from "./TipoTransacao.js";


let saldo: number = 3000;

const Conta = {
    getSaldo(): number {
        return saldo;
    },

    getDataAcesso(): Date {
        return new Date();
    },

    registrarTransacao(novaTransacao: Transacao): void {
        if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
            saldo += novaTransacao.valor;
        } else if ([TipoTransacao.TRANSFERENCIA, TipoTransacao.PAGAMENTO_BOLETO].includes(novaTransacao.tipoTransacao)) {
            saldo -= novaTransacao.valor;
        } else {
            alert("Tipo de transação inválida");
            return;
        }

        console.log(novaTransacao);
    }
}

export default Conta;