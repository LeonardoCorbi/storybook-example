# Hypera-ph-commerce

## Como começar

### instalando as dependencias do projeto

Após clonar o projeto, abra-o em seu terminal e execute:

```
yarn install
```

### Instalando as extensões recomendadas

Abra o editor (dê preferencia ao VSCode), uma caixa de diálogo será exibida para que as extensões sugeridas para o projeto sejam instaladas.
Caso não encontre a caixa de diálogo, as extensões a serem instaladas no seu editor são as seguintes:

```
"dbaeumer.vscode-eslint",
"esbenp.prettier-vscode",
"wix.vscode-import-cost",
"styled-components.vscode-styled-components"
```

_PS.: Caso esteja utilizando outro editor, pode ser que os nomes das extensões mudem, sempre opte por extensões com o mesmo funcionamento._

### Criando as váriaveis de ambientes

Crie um arquivo chamado `.env`, copie todo o conteúdo do arquivo `.env-example`, cole dentro do arquivo `.env`, e altere as váriaveis de acordo com o seu ambiente.

## Scripts disponíveis

### `yarn start`

Executa a aplicação em modo de desenvolvimento na porta [3000](http://localhost:3000)

### `yarn build`

Gera os arquivos estáticos da aplicação na pasta _build_ a serem utilizados no deploy da aplicação.

### `yarn lint`

Checa problemas de falta de padronização em todos os arquivos do projeto.

### `yarn lint:fix`

Ajusta problemas de padronização básicos, como espaços, quebras de linha, e etc...

### `yarn test`

Executa os testes disponíveis nos arquivos `**.spec.**` ou `**.test.***`.

### `yarn test:coverage`

Executa a cobertura de testes dos arquivos do projeto na pasta _coverage_.

### `yarn start:coverage`

Executa o dashboard de cobertura dos testes.

### `yarn build:storybook`

Gera os arquivos estáticos da documentação de componentes na pasta _storybook-static_ a serem utilizados no deploy da aplicação.

### `yarn start:storybook`

Executa a aplicação de documentação de componentes.
