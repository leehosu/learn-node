const express = require('express');
const app = express();
const port = process.env.PORT || 3000;



app.get('/', (req, res) => {
    res.type('text/plain')
    res.send('WELCOME!')
})

app.get('/about', (req, res) => {
    res.type('text/plain')
    res.send('About !!')
})

app.use((req,res) => {
    res.type('text/plain');
    res.status(404)
    res.send('404 - NOT FOUND')
})

app.use((err, req, res, next) => {
    console.log(err.message);
    res.type('text/plain')
    res.status(500)
    res.send('500 - Server Error')
})

app.listen(port, () => console.log(`${port} port에서 서버가 실행 중입니다.` ));