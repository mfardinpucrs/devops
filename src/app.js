function getHealthStatus() {
  return {
    status: 'ok',
    service: 'devops-na-pratica-fase1',
    phase: 'fase1'
  };
}

function buildResponse(pathname) {
  if (pathname === '/health') {
    return {
      statusCode: 200,
      body: getHealthStatus()
    };
  }

  if (pathname === '/') {
    return {
      statusCode: 200,
      body: {
        message: 'Projeto DevOps na Prática - Fase 2',
        repository: 'https://github.com/mfardinpucrs/devops',
        status: 'Aplicação executando em container Docker'
      }
    };
  }

  return {
    statusCode: 404,
    body: {
      error: 'Rota não encontrada'
    }
  };
}

export {
  getHealthStatus,
  buildResponse
};
