# Infraestrutura como Codigo - AWS CloudFormation

Este diretorio contém o template CloudFormation utilizado na Fase 1 do projeto da disciplina DevOps na Pratica.

## Arquivo principal

- `template.yml`: define a infraestrutura inicial do projeto na AWS.

## Recurso criado

O template cria um bucket Amazon S3 com:

- versionamento habilitado;
- bloqueio de acesso publico;
- criptografia padrao do lado do servidor;
- tags de identificacao do projeto.

## Validar o template

```bash
aws cloudformation validate-template \
  --template-body file://infra/cloudformation/template.yml
```

## Criar a stack

O nome do bucket S3 deve ser globalmente único na AWS. Se o nome padrão já estiver em uso, será necessário alterar o valor do parametro `BucketName`. OBS: Por se tratar da primeira fase do trabalho da disciplina, não usei a conta AWS para validar a exisência do nome deste bucket ainda.

```bash
aws cloudformation create-stack \
  --stack-name devops-fase1-stack \
  --template-body file://infra/cloudformation/template.yml \
  --parameters ParameterKey=BucketName,ParameterValue=mfardinpucrs-devops-fase1
```

## Consultar a stack

```bash
aws cloudformation describe-stacks \
  --stack-name devops-fase1-stack
```

## Remover a stack

```bash
aws cloudformation delete-stack \
  --stack-name devops-fase1-stack
```
