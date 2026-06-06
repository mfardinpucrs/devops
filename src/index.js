const http = require('node:http');
const { buildResponse } = require('./app');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const response = buildResponse(url.pathname);

  res.writeHead(response.statusCode, {
    'Content-Type': 'application/json; charset=utf-8'
  });
  res.end(JSON.stringify(response.body));
});

server.listen(port, () => {
  console.log(`Aplicacao executando na porta ${port}`);
});
