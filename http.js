const http = require('http');

const server = http.createServer((req,res) => {
res.write('welcome back chief')
res.end()
})

server.listen(5000)
res.end()