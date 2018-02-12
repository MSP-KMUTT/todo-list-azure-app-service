const { createServer } = require('http')

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello KMUTT!');
})

const port = process.env.PORT || 8080;
server.listen(port)

console.log('Server is running -> ' + port)
