const express = require('express');
const expressHandlebars = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3000;

const random = [
    "Henrry",
    "Messi",
    "Ronaldo",
    "Rooney",
    "Hazard"
]



app.engine('handlebars', expressHandlebars({
    defaultLayout : 'main'
}))

app.set('view engine','handlebars');

app.get('/', (req, res) => { res.render('home') })

app.get('/about', (req, res) => { 
    const randomPlayer = random[Math.floor(Math.random()* random.length)]
    res.render('about', {
        random : randomPlayer
    }) 
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