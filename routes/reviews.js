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
    var id = req.body.id;

    collection.find({_id:id}, function(err, docs){
    	res.json(docs);
    })
};
