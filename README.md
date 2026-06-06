# DevOps na Pratica - Fase 1

Projeto da disciplina **DevOps na Prática**, desenvolvido para a Fase 1: Configuração e Automacão Inicial.

## Estudante

Mateus Henrique Fardin Lima

## Objetivo

Demonstrar a configuração inicial de um fluxo DevOps com:

- aplicacão Node.js versionada no GitHub;
- pipeline de Integracão Contínua com GitHub Actions;
- testes automatizados;
- scripts de Infraestrutura como Código (IaC) com AWS CloudFormation.

## Estrutura do projeto

```text
devops/
├── .github/
│   └── workflows/
│       └── ci.yml
├── infra/
│   └── cloudformation/
│       ├── template.yml
│       └── README.md
├── src/
│   ├── app.js
│   └── index.js
├── tests/
│   └── app.test.js
├── package.json
├── package-lock.json
└── README.md
```

## Pré-requisitos

- Node.js 20 ou superior
- npm
- Conta GitHub
- AWS CLI configurada, caso os scripts CloudFormation sejam executados

## Executar localmente

Instalar dependencias:

```bash
npm install
```

Executar a aplicacao:

```bash
npm start
```

## Executar testes

```bash
npm test
```

## Executar build

```bash
npm run build
```

## Pipeline de CI

O pipeline de Integração Contínua esta configurado em:

```text
.github/workflows/ci.yml
```

Ele executa automaticamente:

1. checkout do repositório;
2. configuração do Node.js 24;
3. instalação de dependências com `npm ci`;
4. execução dos testes automatizados;
5. execução do build.

## Infraestrutura como Código

Os arquivos de AWS CloudFormation estao em:

```text
infra/cloudformation/
```

O template principal é:

```text
infra/cloudformation/template.yml
```

As instruções de validação, criação e remoção da stack estção em:

```text
infra/cloudformation/README.md
```
