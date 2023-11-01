var saldo = 3000;
var elementoSaldo = document.querySelector(".block-saldo .saldo-valor .valor");
var elementoFormulario = document.querySelector(".block-nova-transacao form");
var elementoTransacoes = document.querySelector(".registro-transacoes");
if (elementoSaldo !== null) {
    elementoSaldo.textContent = saldo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}
elementoTransacoes.querySelectorAll(".mes-group").forEach(function (elementMonth) {
    console.log(elementMonth.textContent);
});
elementoFormulario.addEventListener('submit', function (e) {
    e.preventDefault();
    if (elementoFormulario.checkValidity() === false) {
        alert("Favor Preencha todos os campos da validação");
        return;
    }
    var inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    var inputValor = elementoFormulario.querySelector("#valor");
    var inputData = elementoFormulario.querySelector("#data");
    var tipoTransacao = inputTipoTransacao.value;
    var valor = inputValor.valueAsNumber;
    var data = new Date(inputData.value);
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
    var novaTransacao = { tipoTransacao: tipoTransacao, valor: valor, data: data };
    console.log(novaTransacao);
    elementoFormulario.reset();
});
