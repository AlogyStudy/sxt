

var express = require('express');

var router = require('./controller/router.js');

var app = express();

app.set('view engine','ejs');

app.get('/',router.showIndex);

app.get('/addbook',router.addBook);

app.get('/doadd',router.doadd);

app.get('/edit',router.edit);

app.get('/doedit',router.doedit);

app.listen(80);
