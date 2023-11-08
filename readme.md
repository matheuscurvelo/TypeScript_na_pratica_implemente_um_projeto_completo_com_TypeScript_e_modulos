
# Aula 04 - Modularizando o TypeScript

### Importação e exportação de módulos

Para importar uma função chamada depositar exportada como padrão do módulo saldo.ts e utilizá-la no módulo transacoes.ts é preciso importar da seguinte forma:

```ts
export default depositar(valor: number): void {
    console.log(`valor ${valor} depositado`);
}
```

```ts
import depositar from "./saldo.js";
depositar(1000);
```

Esta é a forma correta de importar e utilizar a função depositar do módulo saldo.ts no módulo transacoes.ts, considerando que a função depositar foi exportada como padrão no módulo saldo.ts.