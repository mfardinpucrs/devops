const test = require('node:test');
const assert = require('node:assert/strict');
const { getHealthStatus, buildResponse } = require('../src/app');

test('getHealthStatus deve retornar status ok', () => {
  const result = getHealthStatus();

  assert.equal(result.status, 'ok');
  assert.equal(result.service, 'devops-na-pratica-fase1');
  assert.equal(result.phase, 'fase1');
});

test('buildResponse deve retornar a resposta da rota raiz', () => {
  const response = buildResponse('/');

  assert.equal(response.statusCode, 200);
  assert.equal(response.body.message, 'Projeto DevOps na Pratica - Fase 1');
  assert.equal(response.body.repository, 'https://github.com/mfardinpucrs/devops');
});

test('buildResponse deve retornar health check', () => {
  const response = buildResponse('/health');

  assert.equal(response.statusCode, 200);
  assert.equal(response.body.status, 'ok');
});

test('buildResponse deve retornar 404 para rota inexistente', () => {
  const response = buildResponse('/rota-inexistente');

  assert.equal(response.statusCode, 404);
  assert.equal(response.body.error, 'Rota nao encontrada');
});
