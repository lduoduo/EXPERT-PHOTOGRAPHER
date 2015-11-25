var express = require('express');
var photoSvc = require('./core/svc.js');
var bodyParser 	= require('body-parser');
var multer = require('multer');
//require('date-utils');

var app = express();

app.use(express.static('home'));

var port = process.env.PORT || 8080; //set our port, PORT is global variable

var router = express.Router();  
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


router.use(function(req, res, next) {
    // do logging
    console.log('request comes as '+ req.url +' at '+req.socket.remoteAddress+' on '+ new Date());
    //console.log('request comes as '+ req.path +' at '+req.connection.remoteAddress+' on '+ new Date());
    next();
});

router.get('/home', function(req, res){
	photoSvc.getMostPopularBG(function(data){
        console.log("in server: "+ data);
        res.json(data);
	});
});

router.get('/homeBG', function(req, res){
	var data = {};
	data.URL = "/img/background.jpg";
	var dataJson = JSON.stringify(data);
	res.json(dataJson);
    // res.render('users', {
    //     users: 'data',
    //     title: "EJS example",
    //     header: "Some users"
    // });
});


app.use('/', router);

var routerAPI = express.Router();

app.use('/api', routerAPI);

app.listen(port);
console.log('Magic happens on port ' + port);