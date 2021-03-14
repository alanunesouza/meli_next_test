<h1 align="center">
  <img alt="mercado-livre" title="mercado-livre" src="./public/images/Logo_ML_2x.png" />
</h1>

<blockquote align="center">“Teste Front-end - Mercado Livre”</blockquote>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#hammer-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Autor e Licença</a>
</p>

## :rocket: Sobre o desafio

Aplicação simples e performática de listagem e detalhes dos produtos do Mercado Livre. Aplicação disponível em produção clicando [aqui](https://meli-product-list.vercel.app/).

### Bibliotecas e Ferramentas utilizadas

- React + Hooks;
- Redux;
- Saga;
- ESLint + Prettier + EditorConfig;

## :hammer: Instalação


clone o repositório:

```
git clone https://github.com/alanunesouza/meli_next_test.git
```

instale as dependências:

```
yarn
```


### Testes Unitários

Rode o comando:

```
yarn test
```

### Ambiente de desenvolvimento

Se você já subiu o backend [BFF](https://github.com/alanunesouza/meli_bff_test) na porta 8080, crie um arquivo ".env.local" na raíz do projeto, para apontarmos as requisições para o BFF:

```
NEXT_PUBLIC_API_BFF="http://localhost:8080/api"
```

Agora basta rodar o comando abaixo para subirmos o projeto:

```
yarn dev
```

Agora o ambiente deve estar disponível em sua máquina, no endereço http://localhost:3000

## :memo: Autor e Licença

Criado por Alan Nunes em 2021. Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

