const http = require('http');
const port = process.env.PORT || 3000;


const server = http.createServer((req, res) => {

    // 쿼리스트링과 같은 마지막 슬래시를 없애고 소문자로 바꾸는 정규식 추가
    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    
    switch(path) {
        case '':
            res.writeHead(200, { 'Content-Type' : 'text/plain'});
            res.write('HomePage');
            res.end();
            break;

        case '/about':
            res.writeHead(200, { 'Content-Type' : 'text/plain'});
            res.write('About');
            res.end();
            break;

        default:
            res.writeHead(400, { 'Content-Type' : 'text/plain'});
            res.write('Not Found');
            res.end();
            break;
    }
})

server.listen(port, () => console.log(`${port} port에서 서버가 실행 중입니다.` ))