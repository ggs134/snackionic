/**
 * Created by JSH on 15. 10. 23.
 */

/*Connect to Mongo
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('mongodb://localhost:7070/snackDB');*/

exports.findAll = function(req, res) {
    // logic to handle GET /cars
    var db = req.db;
    var collection = db.get('snack');

    collection.find({}, function(err, docs){
    	res.json(docs);
      //console.log(docs);
    })

};

exports.findById = function(req, res) {
    var db = req.db;
    var collection = db.get('detail');
    var id = req.body.foodId;

    collection.find({_id:id}, function(err, docs){
    	res.json(docs);
      console.log(docs);
    })
};
