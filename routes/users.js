/**
 * Created by JSH on 15. 10. 23.
 */

/*Connect to Mongo
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('mongodb://localhost:7070/snackDB');*/

exports.findById = function(req, res) {
    var db = req.db;
    var collection = db.get('users');
    var id = req.body.id;

    collection.find({_id:id}, function(err, docs){
    	res.json(docs);
    })
};
