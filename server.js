/*
Here is where you set up your server file.
expres s middleware.
*/

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/sequelizedBurger_controller.js');
app.use('/', routes);


var SequelizedBurger=require("./models")["sequelizedBurger"];
SequelizedBurger.sync();//create a sequelizedBurger table


var PORT = process.env.PORT || 8080; // Sets an initial port. We'll use this later in our listener

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});