# DevOps na Prática - Fase 2

Projeto da disciplina **DevOps na Prática**, desenvolvido inicialmente para a Fase 1 e expandido na Fase 2 para incluir Entrega Contínua, containerização com Docker e execução da aplicação em container.

## Estudante

Mateus Henrique Fardin Lima

## Repositório

https://github.com/mfardinpucrs/devops

## Objetivo

Demonstrar a evolução de um fluxo DevOps completo, contemplando:

- aplicação Node.js versionada no GitHub;
- pipeline automatizado com GitHub Actions;
- testes automatizados;
- build da aplicação;
- scripts de Infraestrutura como Código (IaC) com AWS CloudFormation;
- containerização da aplicação com Docker;
- orquestração local com Docker Compose;
- script de deploy local usando containers;
- validação automatizada da imagem Docker no pipeline de CI/CD.

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
├── scripts/
│   └── deploy.sh
├── src/
│   ├── app.js
│   └── index.js
├── tests/
│   └── app.test.js
├── .dockerignore
├── Dockerfile
├── docker-compose.yml
├── package.json
├── package-lock.json
└── README.md
```

## Pré-requisitos

- Node.js 20 ou superior, recomendado Node.js 24
- npm
- Git
- Docker Desktop
- Conta GitHub
- AWS CLI configurada, caso os scripts CloudFormation sejam executados

## Execução local com Node.js

Instalar dependências:

```bash
npm install
```

Executar a aplicação:

```bash
npm start
```

A aplicação ficará disponível em:

```text
http://localhost:3000
```

## Executar testes

```bash
npm test
```

## Executar build

```bash
npm run build
```

## Execução com Docker

Construir e executar a aplicação com Docker Compose:

```bash
docker compose up --build
```

A aplicação ficará disponível em:

```text
http://localhost:3000
```

Para parar e remover o container:

```bash
docker compose down
```

## Deploy local com containers

A Fase 2 inclui um script de deploy local em:

```text
scripts/deploy.sh
```

Executar o deploy:

```bash
./scripts/deploy.sh
```

O script executa as seguintes ações:

1. encerra containers anteriores com `docker compose down`;
2. reconstrói a imagem Docker;
3. sobe a aplicação em segundo plano com `docker compose up -d --build`;
4. disponibiliza a aplicação em `http://localhost:3000`.

## Pipeline de CI/CD

O pipeline está configurado em:

```text
.github/workflows/ci.yml
```

Ele executa automaticamente:

1. checkout do repositório;
2. configuração do Node.js 24;
3. instalação de dependências com `npm ci`;
4. execução dos testes automatizados;
5. execução do build da aplicação;
6. construção da imagem Docker;
7. execução temporária do container;
8. validação da aplicação via `curl http://localhost:3000`;
9. exibição dos logs do container;
10. remoção do container de validação.

Esse fluxo demonstra a expansão do pipeline de Integração Contínua para um fluxo de CI/CD, pois além de validar o código, também constrói e valida a aplicação empacotada em container Docker.

## Containerização

A aplicação foi containerizada com Docker por meio do arquivo:

```text
Dockerfile
```

O Dockerfile utiliza Node.js, instala as dependências de produção, copia o código-fonte da aplicação e expõe a porta 3000 para execução do serviço.

O arquivo `.dockerignore` evita o envio de arquivos desnecessários para o contexto de build, como `node_modules`, arquivos Git, testes e documentos locais.

## Orquestração local

A orquestração local é feita com Docker Compose por meio do arquivo:

```text
docker-compose.yml
```

Ele define o serviço `devops-app`, constrói a imagem a partir do Dockerfile, mapeia a porta `3000:3000` e configura política de reinicialização `unless-stopped`.

## Infraestrutura como Código

Os arquivos de AWS CloudFormation permanecem em:

```text
infra/cloudformation/
```

O template principal é:

```text
infra/cloudformation/template.yml
```

As instruções de validação, criação e remoção da stack estão em:

```text
infra/cloudformation/README.md
```

## Monitoramento e logs

Nesta fase, o monitoramento foi demonstrado de forma local por meio dos logs do container:

```bash
docker logs devops-app
```

Em uma evolução futura, a aplicação poderia ser integrada a serviços de monitoramento e logging centralizado em nuvem, como Amazon CloudWatch, AWS CloudTrail ou ferramentas equivalentes.

## Segurança

Foram adotadas práticas básicas de segurança no projeto:

- ausência de credenciais no código-fonte;
- uso de controle de versão para rastrear alterações;
- validação automatizada por testes no pipeline;
- uso de `.dockerignore` para reduzir o contexto de build;
- separação entre arquivos de aplicação, infraestrutura, pipeline e scripts.

Como melhoria futura, o pipeline pode incluir análise de vulnerabilidades em dependências e imagem Docker.

## Melhorias futuras

Possíveis evoluções do projeto:

- publicação da imagem Docker em um registry, como Docker Hub, GitHub Container Registry ou Amazon ECR;
- deploy em serviço gerenciado de containers, como Amazon ECS ou Amazon EKS;
- configuração de ambiente de staging antes da produção;
- inclusão de healthcheck no Docker Compose;
- integração com monitoramento centralizado;
- análise automática de vulnerabilidades no pipeline;
- estratégia de rollback ou rollforward automatizada.