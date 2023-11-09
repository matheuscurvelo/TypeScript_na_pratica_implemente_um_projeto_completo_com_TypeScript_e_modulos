
# Aula 04 - Finalizando o projeto do TypeScript

### Salvando dados no localStorage

A função JSON.parse() é utilizada para converter o saldo e as transações armazenadas no localStorage em objetos JavaScript, enquanto o localStorage é usado para armazenar persistentemente essas informações no navegador do usuário.

```ts
let saldo: number = JSON.parse(localStorage.getItem("saldo")) || 0;
const transacoes: Transacao[] = JSON.parse(localStorage.getItem("transacoes"), (key: string, value: string) => {
    if (key === "data") {
        return new Date(value);
    }

    return value;
}) || [];
```