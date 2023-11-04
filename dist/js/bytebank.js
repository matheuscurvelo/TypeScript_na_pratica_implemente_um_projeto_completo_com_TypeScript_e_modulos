let saldo = 3000;
const elementoSaldo = document.querySelector(".block-saldo .saldo-valor .valor");
const elementoFormulario = document.querySelector(".block-nova-transacao form");
const elementoTransacoes = document.querySelector(".registro-transacoes");
alert("Testando compilação do TS");
if (elementoSaldo !== null) {
    elementoSaldo.textContent = saldo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}
elementoFormulario.addEventListener('submit', e => {
    e.preventDefault();
    if (elementoFormulario.checkValidity() === false) {
        alert("Favor Preencha todos os campos da validação");
        return;
    }
    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    const inputValor = elementoFormulario.querySelector("#valor");
    const inputData = elementoFormulario.querySelector("#data");
    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.valueAsNumber;
    let data = new Date(inputData.value);
    if (tipoTransacao == "Depósito") {
        saldo += valor;
    }
    else if (tipoTransacao == 'Transferência' || tipoTransacao == 'Pagamento de Boleto') {
        saldo -= valor;
    }
    else {
        alert("Tipo de transação inválida");
        return;
    }
    elementoSaldo.textContent = saldo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    let novaTransacao = { tipoTransacao, valor, data };
    console.log(novaTransacao);
    elementoFormulario.reset();
});
