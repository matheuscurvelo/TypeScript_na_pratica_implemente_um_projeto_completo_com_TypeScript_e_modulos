const elementoFormulario = document.querySelector(".block-nova-transacao form");
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
    if (tipoTransacao == TipoTransacao.DEPOSITO) {
        saldo += valor;
    }
    else if ([TipoTransacao.TRANSFERENCIA, TipoTransacao.PAGAMENTO_BOLETO].includes(tipoTransacao)) {
        saldo -= valor;
    }
    else {
        alert("Tipo de transação inválida");
        return;
    }
    elementoSaldo.textContent = formatarMoeda(saldo);
    let novaTransacao = { tipoTransacao, valor, data };
    console.log(novaTransacao);
    elementoFormulario.reset();
});
