const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = new express();
const server = http.createServer(app);
const cookieSecret = "kjimin2123";

app.set('port',9060);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(session({
    resave: false,
    saveUninitialized:false,
    secret:cookieSecret
}));



//mode: history 초기화
app.get('/*',(req,res) => {
    res.render('main');
});

server.listen(app.get('port'), () => {
    console.log(`서버가 ${app.get('port')}포트에서 구동중입니다.`);
});



