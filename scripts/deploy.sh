#!/bin/sh

set -e

echo "Iniciando deploy local com Docker Compose..."

docker compose down
docker compose up -d --build

echo "Deploy concluido."
echo "Aplicacao disponivel em: http://localhost:3000"
