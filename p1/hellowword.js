const http = require('http');
const port = process.env.PORT || 3000;


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type' : 'text/plain' })
    res.write('Hellow world!');
    res.end();
})

server.listen(port, () => console.log(`${port} port에서 서버가 실행 중입니다.` ))