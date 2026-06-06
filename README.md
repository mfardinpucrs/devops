# DevOps na Pratica - Fase 1

Projeto da disciplina **DevOps na Pratica**, desenvolvido para a Fase 1: Configuracao e Automacao Inicial.

## Estudante

Mateus Henrique Fardin Lima

## Repositorio

https://github.com/mfardinpucrs/devops

## Objetivo

Demonstrar a configuracao inicial de um fluxo DevOps com:

- aplicacao Node.js versionada no GitHub;
- pipeline de Integracao Continua com GitHub Actions;
- testes automatizados;
- scripts de Infraestrutura como Codigo com AWS CloudFormation.

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

## Pre-requisitos

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

Acessar no navegador ou via curl:

```bash
curl http://localhost:3000/
curl http://localhost:3000/health
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

O pipeline de Integracao Continua esta configurado em:

```text
.github/workflows/ci.yml
```

Ele executa automaticamente:

1. checkout do repositorio;
2. configuracao do Node.js 20;
3. instalacao de dependencias com `npm ci`;
4. execucao dos testes automatizados;
5. execucao do build.

## Infraestrutura como Codigo

Os arquivos de AWS CloudFormation estao em:

```text
infra/cloudformation/
```

O template principal e:

```text
infra/cloudformation/template.yml
```

As instrucoes de validacao, criacao e remocao da stack estao em:

```text
infra/cloudformation/README.md
```
