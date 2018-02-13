const { createServer } = require('http')

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  const html = `
    <h1>MSP KMUTT มาเยือน</h1>
  `;
  res.end(html);
  // res.end('Hello from the another side!');
})

const port = process.env.PORT || 1337;
server.listen(port)

console.log('Server is running -> ' + port)
