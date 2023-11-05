let saldo = 3000;

const elementoSaldo = document.querySelector(".block-saldo .saldo-valor .valor") as HTMLElement;
const elementoDataAcesso = document.querySelector("time") as HTMLElement;

if (elementoSaldo !== null) {
    elementoSaldo.textContent = formatarMoeda(saldo)
}

if (elementoDataAcesso !== null) {
    const dataAcesso: Date = new  Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
