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
exports.findById = function(req, res, next) {
    var db = req.db;
    var collection = db.get('detail');
    var id = req.params.foodId;
    var o_id = new require('mongodb').ObjectID(id);
    collection.findOne({ref_id:o_id}, {}, function(err, docs){
      console.log(docs);
      res.json(docs);
    })
};
exports.findByName = function(req, res, next) {
    var db = req.db;
    var collection = db.get('snack');
    var name = req.params.foodName;
    name = name.toString();

    collection.find({'snack_name':name}, function(err, docs){
      //console.log(docs);
      res.json(docs);
    })
};
