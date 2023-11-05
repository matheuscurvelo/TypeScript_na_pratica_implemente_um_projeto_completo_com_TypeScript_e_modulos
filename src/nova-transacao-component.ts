const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;

elementoFormulario.addEventListener('submit', e => {
    e.preventDefault()
    if (elementoFormulario.checkValidity() === false) {
        alert("Favor Preencha todos os campos da validação");
        return;
    }

    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
    const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
    const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement;

    let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao;
    let valor: number = inputValor.valueAsNumber;
    let data: Date = new Date(inputData.value);

    if (tipoTransacao == TipoTransacao.DEPOSITO) {
        saldo += valor;
    } else if ([TipoTransacao.TRANSFERENCIA, TipoTransacao.PAGAMENTO_BOLETO].includes(tipoTransacao)) {
        saldo -= valor;
    } else {
        alert("Tipo de transação inválida");
        return;
    }

    elementoSaldo.textContent = formatarMoeda(saldo);

    let novaTransacao: Transacao = {tipoTransacao, valor, data};
    console.log(novaTransacao);

    elementoFormulario.reset();

});