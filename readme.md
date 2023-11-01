
# Aula 01 - JavaScript vs TypeScript

### Compilação de arquivos TS

Arquivos TypeScript (.ts) não podem ser executados diretamente no navegador do usuário pois este não compreende arquivos deste tipo. Sendo assim é necessário realizar um processo chamado compilação no qual os arquivos .ts são transformados em arquivos JavaScript (.js).

```sh
tsc meu-arquivo.ts
```

O comando tsc aciona o TypeScript Compiler que realiza a compilação de todo o código TS criado transformando-o em JavaScript.


### Definindo o tipo de uma variável

Por meio do TypeScript é possível explicitar o tipo que uma variável possui ou deve possuir em seu conteúdo tornando nosso código muito mais previsível e menos suscetível a erros.
```ts
let meuNumero: number = 0;
```