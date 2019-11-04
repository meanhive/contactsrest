let express = require('express');
let app = express();
let apiRoutes = require('./api-route');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

//configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/contactapi', { useNewUrlParser: true});
var db = mongoose.connection;

if(!db)
    console.log("Error Connecting DB");
else
    console.log("Db connected successfully");

var port = Number(process.env.PORT || 8080);

app.get('/', (req,res)=> res.send("Hello Welcome to Express Rest API"));

// use api routes in app
app.use('/api', apiRoutes);

app.listen(port, function () {
    console.log("Running Contacts API on port " + port);
});