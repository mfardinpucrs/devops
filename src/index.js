import http from 'node:http';
import { buildResponse } from './app.js';

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
  console.log(`Aplicação executando na porta ${port}`);
});
