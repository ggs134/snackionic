exports.findAll = function(req, res) {
    // logic to handle GET /cars
    var db = req.db;
    var collection = db.get('comments');

    collection.find({}, function(err, docs){
    	res.json(docs);
      //console.log(docs);
    })

};

exports.findById = function(req, res) {
    var db = req.db;
    var collection = db.get('comments');
    var name = req.body.name;

    collection.find({snack_name:name}, function(err, docs){
    	res.json(docs);
    })
};
