/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var models = require('../models');
var path = require('path');

router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {

	models.sequelizedBurger.findAll()
	.then(function(data){
		var hbsObject = {burgers: data};
		console.log(hbsObject);
		res.render('index', hbsObject)
	})

});

router.post('/burgers/create', function (req, res) {
	//burger.insertOne(['burger_name', 'devoured'], [req.body.burger_name, false], function () {
	//	res.redirect('/burgers');
	//});
	var burger = req.body;
	console.log(burger);
	models.sequelizedBurger.create({
		burger_name:burger.burger_name,
		devoured:false
	})
	.then(function() {
    res.redirect('/');
  })
});

// router.put('/burgers/update/:id', function (req, res) {
// 	var condition = 'id = ' + req.params.id;

// 	console.log('condition', condition);

// 	burger.updateOne({ devoured: req.body.devoured}, condition, function () {
// 		res.redirect('/burgers');
// 	});
// });

// router.delete('/burgers/delete/:id', function (req, res) {
// 	var condition = 'id = ' + req.params.id;

// 	burger.deleteOne(condition, function () {
// 		res.redirect('/burgers');
// 	});
// });

// router.get('/*',function(req,res){
// 	res.sendFile(path.join(__dirname + '/../public/test.html'));
// 	//res.sendFile('/test.html');
// })

module.exports = router;
