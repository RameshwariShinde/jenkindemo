const http = require('http');
const port = 3000;

http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello from Jenkins CI/CD!');
}).listen(port, () => console.log(`App running on port ${port}`));