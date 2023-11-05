let saldo = 3000;
const elementoSaldo = document.querySelector(".block-saldo .saldo-valor .valor");
const elementoDataAcesso = document.querySelector("time");
if (elementoSaldo !== null) {
    elementoSaldo.textContent = formatarMoeda(saldo);
}
if (elementoDataAcesso !== null) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
