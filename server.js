var express = require('express'),
    employees = require('./routes/employees'),
    app = express();

//Resource of food
var foodResource = require('./routes/foods');
var reviewResource = require('./routes/reviews');

// DATABASE SETUP
mongo = require('mongodb');
var db = require('monk')('mongodb://54.92.86.174:27017/snack');


// =============================================================================

/*var connection = mongoose.createConnection('mongodb://localhost:7070/snackDB');

connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function(){
    console.info('Connected to mongo server.');

    connection.db.collectionNames(function (err, names) {
        console.log(names); // [{ name: 'dbname.myCollection' }]
        module.exports.Collection = names;
    });
});*/


app.use(express.static('www'));

app.use(function (req, res, next) {
    req.db = db;
    next();
});


// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    console.log("Received request to " + req.url);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/collections', function (req, res) {
    db.driver.collectionNames(function(e, name){
        res.json(name);
    })
});
app.get('/collections/:name', function (req, res) {
    var collection = db.get(req.params.name);
    collection.find({},{limit:20}, function (e, docs) {
        res.json(docs);
    })
});

app.get('/employees', employees.findAll);
app.get('/employees/:id', employees.findById);
app.get('/employees/:id/reports', employees.findReports);

app.get('/tab/home', foodResource.findAll);
app.get('/tab/home/:foodId', foodResource.findById);

app.get('/tab/review/', reviewResource.findAll);
app.get('/tab/review/:reviewId', reviewResource.findById);

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
