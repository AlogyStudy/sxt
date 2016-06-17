
var express = require('express');

var router = require('./contorller/router.js');

var db = require('./models/db.js');

var app = express();

app.set('view engine','ejs');

app.get('/',router.showIndex);

app.get('/add',router.showAdd);

app.get('/doadd',router.doadd);

app.get('/edit/:sid',router.edit);

app.get('/doedit/:sid',router.doedit);

app.get('/remove/:sid',router.remove);

app.listen('80');
