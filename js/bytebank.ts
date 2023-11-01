let saldo = 3000;

const elementoSaldo = document.querySelector(".block-saldo .saldo-valor .valor") as HTMLElement;
const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
const elementoTransacoes = document.querySelector(".registro-transacoes") as HTMLElement;

if (elementoSaldo !== null) {
    elementoSaldo.textContent = saldo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

elementoFormulario.addEventListener('submit', e => {
    e.preventDefault()
    if (elementoFormulario.checkValidity() === false) {
        alert("Favor Preencha todos os campos da validação");
        return;
    }

    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
    const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
    const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement;

    let tipoTransacao: string = inputTipoTransacao.value;
    let valor: number = inputValor.valueAsNumber;
    let data: Date = new Date(inputData.value);

    if (tipoTransacao == "Depósito") {
        saldo += valor;
    } else if (tipoTransacao == 'Transferência' || tipoTransacao == 'Pagamento de Boleto') {
        saldo -= valor;
    } else {
        alert("Tipo de transação inválida");
        return;
    }

    elementoSaldo.textContent = saldo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    let novaTransacao = {tipoTransacao, valor, data};
    console.log(novaTransacao);

    elementoFormulario.reset();

});