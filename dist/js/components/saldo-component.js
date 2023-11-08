import { formatarMoeda, formatarData } from "../utils/formatters.js";
import { FormatoData } from "../types/FormatoData.js";
let saldo = 3000;
const elementoSaldo = document.querySelector(".block-saldo .saldo-valor .valor");
const elementoDataAcesso = document.querySelector("time");
if (elementoDataAcesso !== null) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
atualizarSaldo(saldo);
export function getSaldo() {
    return saldo;
}
export function atualizarSaldo(novoSaldo) {
    saldo = novoSaldo;
    if (elementoSaldo !== null) {
        elementoSaldo.textContent = formatarMoeda(saldo);
    }
}
