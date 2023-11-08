import { TipoTransacao } from "../types/TipoTransacao.js";
import { Transacao } from "../types/Transacao.js";
import SaldoComponent from "./saldo-component.js";
import Conta from "../types/Conta.js";

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
    const novaTransacao: Transacao = {tipoTransacao, valor, data};

    Conta.registrarTransacao(novaTransacao);
    SaldoComponent.atualizar();
    
    elementoFormulario.reset();

});